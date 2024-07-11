
  document.addEventListener("DOMContentLoaded", () => {

  const slider = document.getElementById('price-slider');
  const marginMin = document.getElementById('price-slider-value-min');
  const marginMax = document.getElementById('price-slider-value-max');

  noUiSlider.create(slider, {
    start: [0, 700],
    connect: true,
    tooltips: [
      false,
      { to: value => `${Math.round(value)} $`, from: value => value },
    ],
    range: {
      min: 0,
      max: 999,
    },
  });

  slider.noUiSlider.on('update', function (values, handle) {
    const value = Math.round(values[handle]);

    handle ? marginMax.innerHTML = `${value} $` : marginMin.innerHTML = `${value} $`;
  });

console.log(slider);
})

