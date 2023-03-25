// import {isEnterKey} from './util.js';

import { isEnterKey } from './util.js';

const bigPictureWrap = document.querySelector('.big-picture');
const bigPictureImg = bigPictureWrap.querySelector('.big-picture__img img');
const likesCount = bigPictureWrap.querySelector('.likes-count');

export const addHandlers = (objects) => {
  const links = document.querySelectorAll('.picture');

  links.forEach((link) => {
    link.addEventListener('keydown', (evt) => {
      if (isEnterKey(evt)) {
        const ad = objects.find((item) => {
          return item.id === Number(link.dataset.thumbnailId)
        })

        bigPictureWrap.classList.remove('hidden');
        bigPictureImg.src = ad.url;
        likesCount.textContent = ad.likes;
      }
    })
  });
}
