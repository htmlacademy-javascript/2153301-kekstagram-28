// import {isEnterKey} from './util.js';



const container = document.querySelector('.pictures');
const bigPictureWrap = document.querySelector('.big-picture');
const bigPictureImg = bigPictureWrap.querySelector('.big-picture__img img');
const likesCount = bigPictureWrap.querySelector('.likes-count');




container.addEventListener('click', (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  


  if (thumbnail) {
    showBigPicture();}
  bigPictureImg.src = thumbnail.src;
  // likesCount.textContent =
});

container.addEventListener('keydown', (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (thumbnail) {
    showBigPicture()}
});

let showBigPicture = () => {
  bigPictureWrap.classList.remove('hidden');

};
