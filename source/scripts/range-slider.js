const handlesSlider = document.querySelector('.range__scale');
const minPriceInput = document.querySelector('input[name="min-price"]');
const maxPriceInput = document.querySelector('input[name="max-price"]');

noUiSlider.create(handlesSlider, {
  start: [0, 900],
  connect: true,
  range: {
    'min': [0],
    'max': [1068]
  },
  step: 1,
  to: function (value) {
    return value.toFixed(0);
  },
  from: function (value) {
    return value.toFixed(0);
  },
});

handlesSlider.noUiSlider.get([minPriceInput.value, maxPriceInput.value]);

handlesSlider.noUiSlider.on('update', (values) => {
  minPriceInput.value = Math.trunc(values[0]);
  maxPriceInput.value = Math.trunc(values[1]);
});

minPriceInput.addEventListener('change', () => {
  handlesSlider.noUiSlider.set([minPriceInput.value, null]);
});

maxPriceInput.addEventListener('change', () => {
  handlesSlider.noUiSlider.set([null, maxPriceInput.value]);
});
