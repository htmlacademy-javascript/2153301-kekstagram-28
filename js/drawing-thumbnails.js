const TEMPLATE_PICTURE = document.querySelector('#picture').content.querySelector('.picture');

// контейнер для фото
const CONTAINER = document.querySelector('.pictures');

const CREATE_THUMBNAIL = ({ url, likes, comments, description }) => {
  let thumbnailClone = TEMPLATE_PICTURE.cloneNode(true);

  thumbnailClone.querySelector('.picture__img').src = url;
  thumbnailClone.querySelector('.picture__img').alt = description;
  thumbnailClone.querySelector('.picture__likes').textContent = likes;
  thumbnailClone.querySelector('.picture__comments').textContent = comments.length;

  return thumbnailClone;
};

const RENDER_THUMBNAILS = (pictures) => {
  const FRAGMENT = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const THUMBNAIL = CREATE_THUMBNAIL(picture);
    FRAGMENT.append(THUMBNAIL);
  });

  CONTAINER.append(FRAGMENT);
};

export { RENDER_THUMBNAILS };


