import { isEnterKey, isEscapeKey } from './util.js';

const bigPictureWrap = document.querySelector('.big-picture');
const bigPictureImg = bigPictureWrap.querySelector('.big-picture__img img');
const likesCount = bigPictureWrap.querySelector('.likes-count');
const commentsCount = bigPictureWrap.querySelector('.comments-count');

const socialCommentCount = bigPictureWrap.querySelector('.social__comment-count');
let commentDispenser = socialCommentCount.querySelector('.comment-dispenser');
const commentsLoader = bigPictureWrap.querySelector('.comments-loader');

const comments = bigPictureWrap.querySelector('.social__comments');
const comment = comments.querySelector('li').cloneNode(true);
const body = document.querySelector('body');

// функция отслеживающая нажатие ENTER
const closeBigPicture = () => {
  bigPictureWrap.classList.add('hidden');
  body.classList.remove('modal-open');
  commentDispenser.textContent = '';
};

const escapeKeydownHandler = (evt) => {
  if(isEscapeKey(evt)) {
    closeBigPicture();
    document.removeEventListener('keydown', escapeKeydownHandler);
  }
};

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

  const numberOfComments = templateThumbnail.comments.length;

  if (numberOfComments < 5) {
    commentsLoader.classList.add('hidden');
    commentDispenser.textContent = numberOfComments;
  } else {
    commentDispenser.textContent = '5';
    commentsLoader.classList.remove('hidden');
  }

  // console.log('привет');
  // commentDispenser = 5;
  // const oneComment = comments.children;
  // oneComment.classList.add('hidden')



  // const allComments = comments.querySelectorAll('.social__comment');

  // commentsShown += COMMENTS_PER_PORTION;

  const socialCaption = bigPictureWrap.querySelector('.social__caption');

  socialCaption.textContent = templateThumbnail.description;
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

const bigPictureCancel = bigPictureWrap.querySelector('.big-picture__cancel');

bigPictureCancel.addEventListener('click', () => {
  closeBigPicture();
});
