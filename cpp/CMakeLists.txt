cmake_minimum_required(VERSION 3.20)

project(Learn LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(learn
    src/main.cpp
)

# Native and WebAssembly build configurations
if(EMSCRIPTEN)

    set_target_properties(learn PROPERTIES
        SUFFIX ".js"
        RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/../web/wasm"
    )

    target_link_options(learn PRIVATE
        "-sMODULARIZE=1"
        "-sEXPORT_NAME=createLearn"
        "-sEXPORTED_FUNCTIONS=['_evaluate_wave','_malloc','_free']"
        "-sEXPORTED_RUNTIME_METHODS=['ccall','cwrap','HEAPF64']"
    )

endif()
