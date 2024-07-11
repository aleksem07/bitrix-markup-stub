
  document.addEventListener("DOMContentLoaded", () => {

  const slider = document.getElementById('price-slider');
  
  noUiSlider.create(slider, {
    start: [0, 700],
    connect: true,
    range: {
      min: 0,
      max: 999,
    },
  });

console.log(slider);
})

