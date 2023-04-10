const PICTURES_COUNT = 10;

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

// контейнер для фотографий
const container = document.querySelector('.pictures');

// блок сортировки фотографий
const filterElement = document.querySelector('.img-filters');
const imgFilterDefault = filterElement.querySelector('#filter-default');
const imgFilterRandomUnique = filterElement.querySelector('#filter-random');
const imgFilterDiscussed = filterElement.querySelector('#filter-discussed');
const showImgFilter = () => {
  filterElement.classList.remove('img-filters--inactive');
};

let currentFilter = filterElement.querySelector('.img-filters__button--active');

// отслеживание клика и присваивание currentFilter нового значения
filterElement.addEventListener('click', (evt) => {

  if (evt.target.matches('.img-filters__button')) {
    currentFilter.classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    currentFilter = evt.target;

    console.log(currentFilter);
    return currentFilter;
  }
});
console.log();
const sortRandomly = () => Math.random() - 0.5;

const getFilteredPictures = (choice) => {
  switch (currentFilter) {
    case 1:
      return choice.slice().sort(sortRandomly).slice(0, PICTURES_COUNT);
    case imgFilterDiscussed:
      return choice.slice().sort(sortByComments);
    default :
      return choice.slice();
  }
};

const sortByComments = (photoA, photoB) => {
  return photoB.comments.length - photoA.comments.length
};

// создание миниатюры
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
  const fragment = document.createDocumentFragment();

  getFilteredPictures(pictures)
    .forEach((picture) => {
      const thumbnail = createThumbnail(picture);
      fragment.append(thumbnail);
    });
  container.append(fragment);
};

export { renderThumbnails, showImgFilter };
