import { resetScale } from './slider-scale.js';
import { resetEffects } from './slider-effect.js';
import { isEscapeKey, showAlert } from './util.js';
import { pristine } from './validation-input.js';
import { sendData} from './api.js';
import {showErrorMessage, showSuccessMessage} from './modal-error-success.js';

const inputUploadFile = document.querySelector('#upload-file');
// модальное окно редактирования фотографии
const imgOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
// кнопка закрытия окна редактирования фотографии
const uploadCancel = document.querySelector('#upload-cancel');

// поля комментариев и хештегов
const commentField = document.querySelector('#text-description');
const hashtagsField = document.querySelector('#text-hashtags');
const uploadForm = document.querySelector('#upload-select-image');
const submitButton = uploadForm.querySelector('.img-upload__submit');


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
};

const closePhotoEditing = () => {
  imgOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  pristine.reset();
  resetScale();
  resetEffects();
  document.removeEventListener('keydown', handleEscapeKeydown);
  uploadCancel.removeEventListener('click', closePhotoEditing);
  commentField.removeEventListener('keydown', removeListenerField);
  hashtagsField.removeEventListener('keydown', removeListenerField);
};

const handleUserForm = () => {
  inputUploadFile.addEventListener('change', () => {
    showPhotoEditing();
    document.addEventListener('keydown', handleEscapeKeydown);
    uploadCancel.addEventListener('click', closePhotoEditing);
    commentField.addEventListener('keydown', removeListenerField);
    hashtagsField.addEventListener('keydown', removeListenerField) ;
  });
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit',(evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(() => {
          onSuccess();
          showSuccessMessage();
        })
        .catch(
          (err) => {
            showAlert(err.message);
            showErrorMessage();
          }
        )
        .finally(unblockSubmitButton);
    }
  });
}

export {handleUserForm, setUserFormSubmit, showPhotoEditing, closePhotoEditing};
