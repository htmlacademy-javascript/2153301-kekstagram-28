import { isEnterKey, isEscapeKey } from './util.js';

const bigPictureWrap = document.querySelector('.big-picture');
const bigPictureImg = bigPictureWrap.querySelector('.big-picture__img img');
const likesCount = bigPictureWrap.querySelector('.likes-count');
const commentsCount = bigPictureWrap.querySelector('.comments-count');

const comments = bigPictureWrap.querySelector('.social__comments');
const comment = comments.querySelector('li').cloneNode(true);
const body = document.querySelector('body');

// функция отслеживающая нажатие ENTER
const closeBigPicture = () => {
  bigPictureWrap.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', handleEscapeKeydown);
};

const handleEscapeKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    closeBigPicture();
  }
};

const showBigPicture = (objects, link) => {
  const ad = objects.find((item) =>
    item.id === Number(link.dataset.thumbnailId)
  );
  bigPictureWrap.classList.remove('hidden');

  bigPictureImg.src = ad.url;
  likesCount.textContent = ad.likes;
  commentsCount.textContent = String(ad.comments.length);

  const commentFragment = document.createDocumentFragment();
  ad.comments.forEach((item) => {
    const newComment = comment.cloneNode(true);
    const picture = newComment.querySelector('img');
    const socialText = newComment.querySelector('p');

    picture.src = item.avatar;
    picture.alt = item.name;
    socialText.textContent = item.message;

    commentFragment.append(newComment);
  });
  comments.textContent = '';
  comments.append(commentFragment);

  const socialCaption = bigPictureWrap.querySelector('.social__caption');
  const socialCommentCount = bigPictureWrap.querySelector('.social__comment-count');
  const commentsLoader = bigPictureWrap.querySelector('.comments-loader');

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  socialCaption.textContent = ad.description;
  body.classList.add('modal-open');

  document.addEventListener('keydown', handleEscapeKeydown);
};

// функция отслеживающая нажатие ENTER и клик на миниатюре
export const addHandlers = (objects) => {
  const links = document.querySelectorAll('.picture');
  links.forEach((link) => {
    link.addEventListener('keydown', (evt) => {
      if (isEnterKey(evt)) {
        showBigPicture(objects, link);
      }
    });
    link.addEventListener('click', () => {
      showBigPicture(objects, link);
    });
  });
};

const bigPictureCancel = bigPictureWrap.querySelector('.big-picture__cancel');

bigPictureCancel.addEventListener('click', () => {
  closeBigPicture();
});
