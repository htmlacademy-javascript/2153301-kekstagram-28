import { createObjects } from './constants.js';
import { renderThumbnails } from './create-thumbnails.js';
import { addHandlers } from './displayBigPicture2.js';


const objects = createObjects();


renderThumbnails(objects);

// console.log(renderThumbnails);

addHandlers(objects);

