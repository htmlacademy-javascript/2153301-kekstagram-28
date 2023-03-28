const formUploadImg = document.querySelector('.img-upload__form');
const inputUploadFile = document.querySelector('#upload-file');
const blockImgOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

const pristine = new Pristine(formUploadImg);

inputUploadFile.addEventListener('change', (evt) => {
  console.log('привет');
  blockImgOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
})

