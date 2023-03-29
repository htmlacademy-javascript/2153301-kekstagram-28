const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

function validateComment (value) {
  return value <= 140;
}

pristine.addValidator(uploadForm.querySelector('#text-description'), validateComment, 'Не более 140 символов');

// function validateHashtags (value) {
//   return
// }


uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});


