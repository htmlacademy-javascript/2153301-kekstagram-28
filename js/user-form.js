import { resetScale } from './slider-scale.js';
import { resetEffects } from './slider-effect.js';
import { isEscapeKey, showAlert } from './util.js';
import { pristine } from './validation-input.js';
import { sendData} from './api.js';
import {showErrorMessage, showSuccessMessage} from './modal-error-success.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const inputUploadFile = document.querySelector('#upload-file');
const imgOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const preview = document.querySelector('.img-upload__preview img');

const commentField = document.querySelector('#text-description');
const hashtagsField = document.querySelector('#text-hashtags');
const uploadForm = document.querySelector('#upload-select-image');
const submitButton = uploadForm.querySelector('.img-upload__submit');

const showPhotoEditing = () => {
  imgOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

const removeListenerFieldHandler = (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const closePhotoEditingHandler = () => {
  imgOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  pristine.reset();
  resetScale();
  resetEffects();
  uploadCancel.removeEventListener('click', closePhotoEditingHandler);
  commentField.removeEventListener('keydown', removeListenerFieldHandler);
  hashtagsField.removeEventListener('keydown', removeListenerFieldHandler);
};

const escapeKeydownUserFormHandler = (evt) => {
  if(isEscapeKey(evt)) {
    closePhotoEditingHandler();
    document.removeEventListener('keydown', escapeKeydownUserFormHandler);
  }
};

const handleUserForm = () => {
  inputUploadFile.addEventListener('change', () => {
    showPhotoEditing();
    const file = inputUploadFile.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      preview.src = URL.createObjectURL(file);
    }

    document.addEventListener('keydown', escapeKeydownUserFormHandler);
    uploadCancel.addEventListener('click', closePhotoEditingHandler);
    commentField.addEventListener('keydown', removeListenerFieldHandler);
    hashtagsField.addEventListener('keydown', removeListenerFieldHandler) ;
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
            document.removeEventListener('keydown', escapeKeydownUserFormHandler);
          }
        )
        .finally(unblockSubmitButton);
    }
  });
};

export {handleUserForm, setUserFormSubmit, showPhotoEditing, closePhotoEditingHandler, escapeKeydownUserFormHandler};
