const TEMPLATE_PICTURE = document.querySelector('#picture').content.querySelector('.picture');

// контейнер для фото
const CONTAINER = document.querySelector('.pictures');

const CREATE_THUMBNAIL = ({ url, likes, comments, description }) => {
  const THUMBNAIL_CLONE = TEMPLATE_PICTURE.cloneNode(true);

  THUMBNAIL_CLONE.querySelector('.picture__img').src = url;
  THUMBNAIL_CLONE.querySelector('.picture__img').alt = description;
  THUMBNAIL_CLONE.querySelector('.picture__likes').textContent = likes;
  THUMBNAIL_CLONE.querySelector('.picture__comments').textContent = comments.length;

  return THUMBNAIL_CLONE;
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


