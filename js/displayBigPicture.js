import {isEnterKey} from './util.js';

const container = document.querySelector('.pictures');
const bigPictureWrap = document.querySelector('.big-picture');
const bigPictureImg = bigPictureWrap.querySelector('.big-picture__img img');
const likesCount = bigPictureWrap.querySelector('.likes-count');


container.addEventListener('click', (evt) => {
  debugger;
  if (evt.target.closest('[data-thumbnail-id]')) {
    // const pictureCommentsCount = evt.target.querySelector('')
    showBigPicture();
    bigPictureImg.src = evt.target.src;
  }
});


container.addEventListener('keydown', (evt) => {

  if (isEnterKey(evt)) {
  const imgLink = evt.target.closest('[data-thumbnail-id]');

    if (imgLink) {
      debugger;
      const imgInsideLink = imgLink.querySelector('.picture__img');

      showBigPicture();
      bigPictureImg.src = imgInsideLink.src;
    }
  }
});


let showBigPicture = () => {
  bigPictureWrap.classList.remove('hidden');
};







