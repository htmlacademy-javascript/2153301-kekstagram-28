const formUploadImg = document.querySelector('.img-upload__form');
const inputUploadFile = document.querySelector('#upload-file');
// модальное окно редактирования фотографии
const imgOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
// кнопка закрытия окна редактирования фотографии
const uploadCancel = document.querySelector('#upload-cancel');


const showPhotoEditing = () => {

};

inputUploadFile.addEventListener('change', (evt) => {
  imgOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
})


const closePhotoEditing = () => {
  uploadCancel.addEventListener('click', () => {
    imgOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  });

}

