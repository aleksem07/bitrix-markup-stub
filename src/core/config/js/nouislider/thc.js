// =require add-slider.js
addSlider('thc', null, 'thc-value', {
  start: [65],
  connect: 'lower',
  tooltips: { to: value => `${Math.round(value)} $`, from: value => value },
  range: {
    min: 0,
    max: 100,
  }
});
