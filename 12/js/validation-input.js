// валидируемая форма
const uploadForm = document.querySelector('.img-upload__form');

// поля комментариев и хештегов
const commentField = uploadForm.querySelector('#text-description');
const hashtagsField = uploadForm.querySelector('#text-hashtags');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

// валидация поля комментариев
function validateComment (value) {
  return value.length <= 140;
}

// проверка на повторения хештегов
const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

// валидация поля хештегов
const validateHashtags = (value) => {
  const valueFreeSpace = value.trimEnd();
  if(valueFreeSpace.length === 0) {
    return true;
  } else {
    const splittedValue = valueFreeSpace.split(' ');
    if (splittedValue.length < 6) {
      return splittedValue.every((item) =>
        /^#[a-zа-яё0-9]{1,19}$/i.test(item)) && hasUniqueTags(splittedValue);
    }
  }
};

pristine.addValidator(commentField, validateComment, 'Не более 140 символов');
pristine.addValidator(hashtagsField, validateHashtags, 'Хештег должен начинаться с' +
  ' #,содержать буквы, цифры и должен быть не менее двух и не более 20 знаков. Нельзя использовать более пяти' +
  ' хэш-тегов. Нельзя использовать два одинаковых хэш тега.');

// uploadForm.addEventListener('submit',(evt) => {
//   if(!pristine.validate()) {
//     evt.preventDefault();
//   }
// });

export { pristine };


