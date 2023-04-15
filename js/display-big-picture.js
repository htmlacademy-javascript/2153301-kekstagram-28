import { isEnterKey, isEscapeKey } from './util.js';

const bigPictureWrap = document.querySelector('.big-picture');
const bigPictureImg = bigPictureWrap.querySelector('.big-picture__img img');
const likesCount = bigPictureWrap.querySelector('.likes-count');
const commentsCount = bigPictureWrap.querySelector('.comments-count');

const commentsLoader = bigPictureWrap.querySelector('.comments-loader');
const socialCommentCount = bigPictureWrap.querySelector('.social__comment-count');

const commentDispenser = socialCommentCount.querySelector('.comment-dispenser');
let currentCommentCount = 0;
let currentMaxValueDispenser = 5;

const comments = bigPictureWrap.querySelector('.social__comments');
const comment = comments.querySelector('li').cloneNode(true);
const body = document.querySelector('body');

const showBigPicture = (objects, link) => {
  const templateThumbnail = objects.find((item) =>
    item.id === Number(link.dataset.thumbnailId)
  );
  bigPictureWrap.classList.remove('hidden');

  bigPictureImg.src = templateThumbnail.url;
  likesCount.textContent = templateThumbnail.likes;
  commentsCount.textContent = String(templateThumbnail.comments.length);

  const commentFragment = document.createDocumentFragment();
  templateThumbnail.comments.forEach((item) => {
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

  const allComments = comments.childNodes;

  allComments.forEach((item) => {
    item.classList.add('hidden');
  });

  const numberOfComments = templateThumbnail.comments.length;


  const displayComments = () => {
    if (numberOfComments < currentMaxValueDispenser) {
      commentsLoader.classList.add('hidden');
      commentDispenser.textContent = numberOfComments;
    } else {
      commentDispenser.textContent = String(currentCommentCount + 5);
      currentCommentCount = Number(commentDispenser.textContent);
      commentsLoader.classList.remove('hidden');
    }
    currentMaxValueDispenser += 5;
  };

  displayComments();

  commentsLoader.addEventListener('click', displayComments);

  const closeBigPicture = () => {
    bigPictureWrap.classList.add('hidden');
    body.classList.remove('modal-open');
    commentDispenser.textContent = '';
    currentCommentCount = 0;
    currentMaxValueDispenser = 5;
    commentsLoader.removeEventListener('click', displayComments);
  };

  const escapeKeydownHandler = (evt) => {
    if(isEscapeKey(evt)) {
      closeBigPicture();
      document.removeEventListener('keydown', escapeKeydownHandler);
    }
  };

  const bigPictureCancel = bigPictureWrap.querySelector('.big-picture__cancel');

  bigPictureCancel.addEventListener('click', () => {
    closeBigPicture();
  });

  body.classList.add('modal-open');

  document.addEventListener('keydown', escapeKeydownHandler);
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
