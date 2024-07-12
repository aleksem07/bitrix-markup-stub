const addSlider = (sliderId, minId, maxId, options) => {
  document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById(sliderId);
    const marginMin = minId ? document.getElementById(minId) : null;
    const marginMax = document.getElementById(maxId);

    noUiSlider.create(slider, {
      start: options.start,
      connect: options.connect,
      tooltips: options.tooltips,
      range: options.range,
    });

    slider.noUiSlider.on('update', (values, handle) => {
      const value = Math.round(values[handle]);

      if (handle === 0 && marginMin) {
        marginMin.innerHTML = `${value} $`;
      } else {
        marginMax.innerHTML = `${value} $`;
      }
    });
  });
};

