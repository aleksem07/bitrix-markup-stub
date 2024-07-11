document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('thc');
  const max = document.getElementById('thc-value');

  noUiSlider.create(slider, {
    start: 65,
    connect: 'lower',
    tooltips: { to: value => `${Math.round(value)} $`, from: value => value },
    range: {
      min: 0,
      max: 100,
    },
  });

  slider.noUiSlider.on('update', function (values, handle) {
    const value = Math.round(values[handle]);
      max.innerHTML = `${value} $`
  });

});
