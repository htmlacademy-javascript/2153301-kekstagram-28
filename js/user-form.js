import {isEscapeKey} from './util.js';

const inputUploadFile = document.querySelector('#upload-file');
// модальное окно редактирования фотографии
const imgOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
// кнопка закрытия окна редактирования фотографии
const uploadCancel = document.querySelector('#upload-cancel');

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



