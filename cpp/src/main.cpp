// Bash to enable Emscripten
// source ~/Documents/emsdk/emsdk_env.sh

// Bash to make these files
// emcmake cmake -S cpp -B build/wasm
// cmake --build build/wasm

#include <iostream>
#include <cmath>
#include <random>
#include <algorithm>
#include <emscripten.h>

double getRandom(int first, int second) {
    // 1. Obtain a random seed from the hardware
    static std::random_device rd;
    
    // 2. Seed the Mersenne Twister engine (static so it's only seeded once)
    static std::mt19937 gen(rd());
    
    // 3. Define the inclusive range [first, second]
    std::uniform_real_distribution<> distr(first, second);
    
    return distr(gen);
}

extern "C"{

    // Takes a pointer to input x-values, writes results into output y-values
    EMSCRIPTEN_KEEPALIVE
    void evaluate_wave(int xi, int xf, double* xs, double* ys, size_t num_samples, double freq) {
        for (size_t i = 0; i < num_samples; ++i) {
            xs[i] = getRandom(xi, xf);
        }

        // Sort xs
        std::sort(xs, xs + num_samples);
        for(size_t i = 0; i < num_samples; ++i) {
            ys[i] = std::sin(freq * xs[i]) * std::exp(-0.15 * xs[i]);
        }
    }
}
