import { createObjects } from './constants.js';
import { renderThumbnails } from './create-thumbnails.js';
import { addHandlers } from './displayBigPicture2.js';
import './user-form.js'


const objects = createObjects();


renderThumbnails(objects);
addHandlers(objects);




