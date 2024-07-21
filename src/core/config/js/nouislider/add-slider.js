const addSlider = (sliderId, minId, maxId, options) => {
  document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById(sliderId);
    const inputMin = minId ? document.getElementById(minId) : null;
    const inputMax = document.getElementById(maxId);

    noUiSlider.create(slider, {
      start: options.start,
      connect: options.connect,
      tooltips: options.tooltips,
      range: options.range,
    });

    slider.noUiSlider.on('update', (values, handle) => {
      const value = Math.round(values[handle]);

      if (handle === 0 && inputMin) {
        inputMin.value = value;
      } else {
        inputMax.value = value;
      }
    });

    if (inputMin) {
      inputMin.addEventListener('input', () => {
        const minValue = parseInt(inputMin.value, 10);
        slider.noUiSlider.set([minValue, null]);
      })
    }

  if (inputMax) {
    inputMax.addEventListener('input', () => {
      const maxValue = parseInt(inputMax.value, 10);

      if (options.connect === 'lower') {
        slider.noUiSlider.set(maxValue);
      } else {
        slider.noUiSlider.set([null, maxValue]);
      }
    });
  }
    
  });
};

