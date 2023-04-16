import { renderThumbnails, changeActualSorting } from './create-thumbnails.js';
import { handleUserForm, setUserFormSubmit, closePhotoEditingHandler } from './user-form.js';
import { getData } from './api.js';
import { showAlert, debounce } from './util.js';

const RERENDER_DELAY = 500;

getData()
  .then((photos) => {
    renderThumbnails(photos);
    changeActualSorting(debounce(() => renderThumbnails(photos),
      RERENDER_DELAY,
    ));
    handleUserForm(photos);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit(closePhotoEditingHandler);
