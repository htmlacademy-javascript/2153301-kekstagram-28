const container = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture')



container.addEventListener('click', (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (!thumbnail) {
    return;
  }
  bigPicture.classList.remove('hidden')
})
