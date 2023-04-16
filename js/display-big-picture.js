import { isEnterKey, isEscapeKey } from './util.js';

const bigPictureWrap = document.querySelector('.big-picture');
const bigPictureImg = bigPictureWrap.querySelector('.big-picture__img img');
const likesCount = bigPictureWrap.querySelector('.likes-count');
const commentsCount = bigPictureWrap.querySelector('.comments-count');

const commentsLoader = bigPictureWrap.querySelector('.comments-loader');
const socialCommentCount = bigPictureWrap.querySelector('.social__comment-count');

const commentDispenser = socialCommentCount.querySelector('.comment-dispenser');
const DEFAULT_COUNT_COMMENTS = 0;
const STEP_COUNT_COMMENTS = 5;
let currentCommentCount = 0;
let currentMaxValueDispenser = 5;
let displayedNumberOfComments = 0;

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
      commentDispenser.textContent = String(currentCommentCount + STEP_COUNT_COMMENTS);
      currentCommentCount = Number(commentDispenser.textContent);
      commentsLoader.classList.remove('hidden');
    }
    displayedNumberOfComments = Number(commentDispenser.textContent);
    currentMaxValueDispenser += STEP_COUNT_COMMENTS;

    for (let i = 0; i < displayedNumberOfComments; i++) {
      allComments[i].classList.remove('hidden');
    }
  };

  displayComments();

  commentsLoader.addEventListener('click', displayComments);

  let escapeKeydownHandler = () => {};
  const bigPictureCancel = bigPictureWrap.querySelector('.big-picture__cancel');

  const closeBigPicture = () => {
    bigPictureWrap.classList.add('hidden');
    body.classList.remove('modal-open');
    commentDispenser.textContent = '';
    currentCommentCount = DEFAULT_COUNT_COMMENTS;
    currentMaxValueDispenser = STEP_COUNT_COMMENTS;
    commentsLoader.removeEventListener('click', displayComments);
    document.removeEventListener('keydown', escapeKeydownHandler);
    bigPictureCancel.removeEventListener('click', closeBigPicture);
  };

  escapeKeydownHandler = (evt) => {
    if(isEscapeKey(evt)) {
      closeBigPicture();
    }
  };

  // const bigPictureCancelHandler = () => {
  //   closeBigPicture();
  //   document.removeEventListener('keydown', escapeKeydownHandler);
  //   bigPictureCancel.removeEventListener('click', bigPictureCancelHandler);
  // };

  bigPictureCancel.addEventListener('click', closeBigPicture);
  // bigPictureCancel.addEventListener('click', bigPictureCancelHandler);

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
