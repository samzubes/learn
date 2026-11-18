
// Auto generate sidebar table of contents from markdown chapters
function buildTextbookTOC() {
  const tocList = document.getElementById('toc-list');
  const chapters = document.querySelectorAll('.textbook .chapter');

  chapters.forEach((chapter, cIndex) => {
    const chNum = cIndex + 1;
    const h2 = chapter.querySelector('h2');
    if (!h2) return;

    const chId = `ch-${chNum}`;
    h2.id = chId;

    const li = document.createElement('li');
    const subheadings = chapter.querySelectorAll('h3');

    if (subheadings.length > 0) {
      const details = document.createElement('details');
      details.name = 'accordian'; // Opening one closes the other

      const summary = document.createElement('summary');
      const chLink = document.createElement('a');
      chLink.href = `#${chId}`;
      chLink.textContent = `${chNum}. ${h2.textContent}`;
      summary.appendChild(chLink);

      const sublist = document.createElement('ul');
      sublist.className = 'sublist';

      subheadings.forEach((h3, sIndex) => {
        const subId = `ch-${chNum}-${sIndex + 1}`;
        h3.id = subId;

        const subLi = document.createElement('li');
        const subLink = document.createElement('a');
        subLink.href = `#${subId}`;
        subLink.textContent = `${chNum}.${sIndex + 1} ${h3.textContent}`;

        subLi.appendChild(subLink);
        sublist.appendChild(subLi);
      });

      details.append(summary, sublist);
      li.appendChild(details);
    } else {
      const link = document.createElement('a');
      link.href = `#${chId}`;
      link.textContent = `${chNum}. ${h2.textContent}`;
      li.appendChild(link);
    }

    tocList.appendChild(li);
  });
}
buildTextbookTOC();


// Sidebar Toggle and Sidebar Scrolling
function sidebarLogic() {
    const layout = document.querySelector('.layout');
    const sidebar = document.querySelector('.sidebar');
    const toggle = document.querySelector('#sidebar-toggle');
    const sidebarList = document.querySelector('.sidebar-list');
    // Toggling sidebar open or closed
    toggle.addEventListener('click', () => {
    layout.classList.toggle('sidebar-open');
    sidebar.classList.toggle('open');
    const isOpen = toggle.classList.toggle('open');
    toggle.textContent = isOpen ? '⟨' : '⟩';
    });
    // Scrolling sidebar
    sidebar.addEventListener('wheel', (e) => {
    if (!sidebarList.contains(e.target)) {
        e.preventDefault();
        sidebarList.scrollTop += e.deltaY;
    }
    }, { passive: false });
}
sidebarLogic();


// C++ Stuff: wavechart
createLearn().then((Module) => {

  // WAVE CHART
  const canvas = document.getElementById('wave-chart');

  const widgetBox = canvas.closest('details.widget-box');

  if (widgetBox && !widgetBox.open) {
    widgetBox.addEventListener('toggle', () => {
      if (widgetBox.open) {
        chart.resize(); // Ensures Chart.js fits the 42rem width cleanly on first open
      }
    }, { once: true });
  }

  if (!canvas) return;

  const bytesPerDouble = 8;

  // Max amount of samples allowed
  const max_samples = 200;

  // Allocate C++ heap memory for input num points and output (ys)
  const xPtr = Module._malloc(max_samples * bytesPerDouble);
  const yPtr = Module._malloc(max_samples * bytesPerDouble);

  // Create Float64Arrays pointing directly at WASM memory
  const xView = new Float64Array(Module.HEAPF64.buffer, xPtr, max_samples);
  const yView = new Float64Array(Module.HEAPF64.buffer, yPtr, max_samples);

  // Make X values
  const labels = new Array(max_samples);
  for (let i = 0; i < 20; i++) {
    labels[i] = i;
  }

  // Run C++ function and return a JS array
  function runCppWave(num_samples, freq) {
    Module._evaluate_wave(0, 20, xPtr, yPtr, num_samples, freq);
    const points = new Array(num_samples);
    for (let i = 0; i < num_samples; i++) {
        points[i] = { x: xView[i], y: yView[i] };
    }
    return points;
  }

  let freq = 1.0;

  // Build the Chart.js chart
  const chart = new Chart(canvas, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Wave',
        data: runCppWave(freq),
        borderColor: '#2563eb',
        borderWidth: 1,
        pointRadius: 2
      }]
    },
    options: {
      animation: false,
      responsive: true,
      scales: {
        x: { type: 'linear', min: 0, max: 20 },
        y: { min: -1, max: 1 }
      }
    }
  });

  const sampleNumInput = document.getElementById('sample-input');

  // Update graph whenever the user types or clicks the up/down arrows
  sampleNumInput?.addEventListener('input', () => {
    let n_samples = parseInt(sampleNumInput.value);
    if (!Number.isFinite(val)) return;
    if (n_samples > max_samples) n_samples = max_samples;
    chart.data.datasets[0].data = runCppWave(n_samples, freq);
    chart.update('none');
  });

  // Reset both the input box and the graph
  document.getElementById('btn-reset')?.addEventListener('click', () => {
    let n_samples = 10;
    if (sampleNumInput) n_samples = sampleNumInput.value;
    chart.data.datasets[0].data = runCppWave(n_samples, freq);
    chart.update('none');
  });
});
