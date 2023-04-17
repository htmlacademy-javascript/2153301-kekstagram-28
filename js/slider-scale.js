const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const inputScaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imgPreview.style.transform = `scale(${value / 100})`;
  inputScaleValue.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(inputScaleValue.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(inputScaleValue.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

buttonSmaller.addEventListener('click', onSmallerButtonClick);
buttonBigger.addEventListener('click', onBiggerButtonClick);

export { resetScale };
