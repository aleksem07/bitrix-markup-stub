// =require add-slider.js

const getTooltipValue = {
  to: value => `${Math.round(value)} $`,
  from: value => value,
};

addSlider('price-slider', 'price-slider-value-min', 'price-slider-value-max', {
  start: [0, 600],
  connect: true,
  tooltips: [getTooltipValue, getTooltipValue],
  range: {
    min: 0,
    max: 999,
  },
});
