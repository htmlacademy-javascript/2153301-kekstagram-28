import { renderThumbnails } from './create-thumbnails.js';
import { addHandlers } from './displayBigPicture.js';
import { showImgFilter } from './create-thumbnails.js';
import { handleUserForm, setUserFormSubmit, closePhotoEditing } from './user-form.js';
import { getData } from './api.js';
import { showAlert, debounce } from './util.js';

const RERENDER_DELAY = 500;

getData()
  .then((photos) => {
    showImgFilter();
    renderThumbnails(photos);
    handleUserForm(photos);
    addHandlers(photos);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit(closePhotoEditing);
