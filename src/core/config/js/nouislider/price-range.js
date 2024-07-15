// =require add-slider.js
addSlider('price-slider', 'price-slider-value-min', 'price-slider-value-max', {
  start: [0, 600],
  connect: true,
  tooltips: [
    { to: value => `${Math.round(value)} $`, from: value => value },
    { to: value => `${Math.round(value)} $`, from: value => value },
  ],
  range: {
    min: 0,
    max: 999,
  },
});
