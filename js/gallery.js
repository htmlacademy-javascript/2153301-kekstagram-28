

const container = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture')

// const renderGallery = (pictures) => {
//   container.addEventListener('click', (evt) => {
//
//      const thumbnail = evt.target.closest('[data-thumbnail-id]');
//      if (!thumbnail) {
//        return;
//      }
//
//      // const picture = pictures.find(
//      //   (item) => item.id === +thumbnail.dataset.thumbnailId
//      // );
//      // showBigPicture(picture);
//   })
//
//   renderThumbnails(pictures, container);
// };


container.addEventListener('click', (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (!thumbnail) {
    return;
  }
    bigPicture.classList.remove('hidden')
})
