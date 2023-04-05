 import { renderThumbnails } from './create-thumbnails.js';
import { addHandlers } from './displayBigPicture.js';
import { handleUserForm, setUserFormSubmit, showPhotoEditing, closePhotoEditing} from './user-form.js';



// renderThumbnails();
// addHandlers();
// handleUserForm();

fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    renderThumbnails(photos);
    handleUserForm(photos);
    addHandlers(photos);
  });
//
 setUserFormSubmit(closePhotoEditing);


