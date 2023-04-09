const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

// контейнер для фотографий
const container = document.querySelector('.pictures');
// блок сортировки фотографий
const imgFilters = document.querySelector('.img-filters');
const imgFilterDefault = imgFilters.querySelector('#filter-default');
const imgFilterRandomUnique = imgFilters.querySelector('#filter-random');
const imgFilterDiscussed = imgFilters.querySelector('#filter-discussed');
const activeFilter = imgFilters.querySelector('.img-filters__button--active')

const showImgFilter = () => {
  imgFilters.classList.remove('img-filters--inactive')
};


const comparePhotoComment = (photoA, photoB) => {
  return photoB.comments.length - photoA.comments.length
};

// const chooseShowDiscussedPhotos = () => {
//     .slice()
//     .sort(comparePhotoComment)
// };

// filter = chooseShowDiscussedPhotos();

// imgFilterDiscussed.addEventListener('click', () => {
//
//   }
// })

// .slice()
// .sort(comparePhotoComment)
let filter = 1;

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
  if ( 2 > 1 )
    pictures
      .slice()
      .sort(comparePhotoComment)



    .forEach((picture) => {
      const thumbnail = createThumbnail(picture);
      fragment.append(thumbnail);
    });
  container.append(fragment);
};

export { renderThumbnails, showImgFilter,  };
