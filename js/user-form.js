import {isEscapeKey} from './util.js';

const inputUploadFile = document.querySelector('#upload-file');
// модальное окно редактирования фотографии
const imgOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
// кнопка закрытия окна редактирования фотографии
const uploadCancel = document.querySelector('#upload-cancel');

// валидируемая форма
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
  return value.length <= 140;
}

function validateHashtags (value) {
  if (value.length === 0) return true;
  const splittedValue = value.split(' ');
  // необходимо проверить каждый элемент массива на соответствие регулярному выражению, если хоть один из элементов не проходит проверку вернуть false
  return /^#[a-zа-яё0-9]{1,19}$/i.test(value);
}

pristine.addValidator(uploadForm.querySelector('#text-description'), validateComment, 'Не более 140 символов');
pristine.addValidator(uploadForm.querySelector('#text-hashtags'), validateHashtags, 'Хэштэг должен начинаться с #,содержать буквы, цифры и должен быть не менее двух и не более 20 знаков');


uploadForm.addEventListener('submit', function (evt)  {
  evt.preventDefault()
  if(pristine.validate()) {
    console.log('valid');
  } else{
    console.log('invalid');
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

const closePhotoEditing = () => {
    imgOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    inputUploadFile.reset();
    pristine.reset();
    document.removeEventListener('keydown', handleEscapeKeydown);
    uploadCancel.removeEventListener('click', closePhotoEditing)
  };

export const handleUserForm = () => {
  inputUploadFile.addEventListener('change', () => {
    showPhotoEditing();
    document.addEventListener('keydown', handleEscapeKeydown);
    uploadCancel.addEventListener('click', closePhotoEditing)
  });
};



