import {isEscapeKey} from './util.js';

const inputUploadFile = document.querySelector('#upload-file');
// модальное окно редактирования фотографии
const imgOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
// кнопка закрытия окна редактирования фотографии
const uploadCancel = document.querySelector('#upload-cancel');

// валидируемая форма
const uploadForm = document.querySelector('.img-upload__form');

// поля комментариев и хэштегов
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
// проверка на повторения хэштегов
const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
}
// валидация поля хэштегов
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
pristine.addValidator(hashtagsField, validateHashtags, 'Хэштэг должен начинаться с' +
  ' #,содержать буквы, цифры и должен быть не менее двух и не более 20 знаков. Нельзя использовать более пяти' +
  ' хэш-тегов. Нельзя использовать два одинаковых хэш тега.');

uploadForm.addEventListener('submit', function (evt)  {
  if(!pristine.validate()) {
    evt.preventDefault();
  }
});

const handleEscapeKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    closePhotoEditing();
  }
};

const showPhotoEditing = () => {
  imgOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

const removeListenerField = (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  }
}

const closePhotoEditing = () => {
  imgOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  inputUploadFile.reset();
  pristine.reset();
  document.removeEventListener('keydown', handleEscapeKeydown);
  uploadCancel.removeEventListener('click', closePhotoEditing);
  commentField.removeEventListener('keydown', removeListenerField);
  hashtagsField.removeEventListener('keydown', removeListenerField);
};

export const handleUserForm = () => {
  inputUploadFile.addEventListener('change', () => {
    showPhotoEditing();
    document.addEventListener('keydown', handleEscapeKeydown);
    uploadCancel.addEventListener('click', closePhotoEditing);
    commentField.addEventListener('keydown', removeListenerField);
    hashtagsField.addEventListener('keydown', removeListenerField) ;
  });
};



