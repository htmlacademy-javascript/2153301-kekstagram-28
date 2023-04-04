import { createObjects } from './constants.js';
import { renderThumbnails } from './create-thumbnails.js';
import { addHandlers } from './displayBigPicture.js';
import { handleUserForm } from './user-form.js';

const objects = createObjects();

renderThumbnails(objects);
addHandlers(objects);
handleUserForm();
