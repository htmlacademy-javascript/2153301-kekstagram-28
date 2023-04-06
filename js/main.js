import { renderThumbnails } from './create-thumbnails.js';
import { addHandlers } from './displayBigPicture.js';
import { handleUserForm, setUserFormSubmit, closePhotoEditing} from './user-form.js';
import { getData} from './api.js';


getData()
  .then((photos) => {
    renderThumbnails(photos);
    handleUserForm(photos);
    addHandlers(photos);
  });

 setUserFormSubmit(closePhotoEditing);


