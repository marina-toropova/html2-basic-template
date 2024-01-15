const handlesSlider = document.querySelector('.range__scale');

noUiSlider.create(handlesSlider, {
  start: [0, 900],
  connect: true,
  range: {
    'min': [0],
    'max': [1068]
  },
  step: 1,
});

handlesSlider.noUiSlider.on('update', (...rest) => {
  console.log(rest);
});
