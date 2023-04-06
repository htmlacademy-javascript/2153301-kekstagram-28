import { renderThumbnails } from './create-thumbnails.js';
import { addHandlers } from './displayBigPicture.js';
import { handleUserForm, setUserFormSubmit, closePhotoEditing} from './user-form.js';
import { getData} from './api.js';
import {showAlert} from './util.js';

getData()
  .then((photos) => {
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
