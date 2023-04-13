import { isEnterKey, isEscapeKey } from './util.js';

const bigPictureWrap = document.querySelector('.big-picture');
const bigPictureImg = bigPictureWrap.querySelector('.big-picture__img img');
const likesCount = bigPictureWrap.querySelector('.likes-count');
const commentsCount = bigPictureWrap.querySelector('.comments-count');


const comments = bigPictureWrap.querySelector('.social__comments');
const comment = comments.querySelector('li').cloneNode(true);
const body = document.querySelector('body');

const commentsShown = 0;
let commentsArray = [];

// функция отслеживающая нажатие ENTER
const closeBigPicture = () => {
  bigPictureWrap.classList.add('hidden');
  body.classList.remove('modal-open');
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

  const allComments = comments.querySelectorAll('.social__comment');
  console.log(allComments);
  allComments.classList.add('hidden');


  // const socialCommentCount = bigPictureWrap.querySelector('.social__comment-count');
  // const commentsLoader = bigPictureWrap.querySelector('.comments-loader');
  //
  // const COMMENTS_PER_PORTION = 5;
  // const numberOfComments = templateThumbnail.comments.length;



  // commentsShown += COMMENTS_PER_PORTION;
  // if (commentsShown >= numberOfComments.length) {
  //   commentsLoader.classList.add('hidden');
  //   commentsShown = numberOfComments.length
  // } else {
  //   commentsLoader.classList.remove('hidden');
  // }
  // const fragment =  document.createDocumentFragment();
  // for(let i = 0; i < commentsShown; i++) {
  //   const commentElement
  // }

  // const oneComment = comments.children;

  // const startingNumberComments = Number(socialCommentCount.querySelector('.comment-dispenser').textContent);



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
