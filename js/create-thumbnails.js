import {addHandlers} from './display-big-picture.js';

const PICTURES_COUNT = 10;

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const container = document.querySelector('.pictures');

const filterElement = document.querySelector('.img-filters');
const imgFilterRandomUnique = filterElement.querySelector('#filter-random');
const imgFilterDiscussed = filterElement.querySelector('#filter-discussed');

let currentFilter = filterElement.querySelector('.img-filters__button--active');

const changeActualSorting = (cb) => {
  filterElement.addEventListener('click', (evt) => {
    if (evt.target.matches('.img-filters__button')) {
      currentFilter.classList.remove('img-filters__button--active');
      evt.target.classList.add('img-filters__button--active');
      currentFilter = evt.target;
      cb();
      return currentFilter;
    }
  });
};

const sortByComments = (photoA, photoB) =>
  photoB.comments.length - photoA.comments.length;

const sortRandomly = () => Math.random() - 0.5;

const getFilteredPictures = (pictures) => {
  switch (currentFilter) {
    case imgFilterRandomUnique:
      return pictures.slice().sort(sortRandomly).slice(0, PICTURES_COUNT);
    case imgFilterDiscussed:
      return pictures.slice().sort(sortByComments);
    default :
      return pictures.slice();
  }
};

const createThumbnail = ({ url, likes, comments, description, id }) => {
  const thumbnailClone = templatePicture.cloneNode(true);

  thumbnailClone.querySelector('.picture__img').src = url;
  thumbnailClone.querySelector('.picture__img').alt = description;
  thumbnailClone.querySelector('.picture__likes').textContent = likes;
  thumbnailClone.querySelector('.picture__comments').textContent = comments.length;
  thumbnailClone.dataset.thumbnailId = id;

  return thumbnailClone;
};

const renderThumbnails = (pictures) => {
  container.querySelectorAll('.picture').forEach((element) => element.remove());

  const fragment = document.createDocumentFragment();

  getFilteredPictures(pictures)
    .forEach((picture) => {
      const thumbnail = createThumbnail(picture);
      fragment.append(thumbnail);
    });

  container.append(fragment);
  filterElement.classList.remove('img-filters--inactive');
  addHandlers(pictures);
};

export { renderThumbnails, changeActualSorting};
