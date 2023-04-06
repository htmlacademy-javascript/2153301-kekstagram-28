import {renderThumbnails} from './create-thumbnails.js';
import {handleUserForm} from './user-form.js';
import {addHandlers} from './displayBigPicture.js';

const BASE_URL = 'https://28.javascript.pages.academy/code-and-magick';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};


const getData = (onSuccess) => fetch
  ('https://28.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      renderThumbnails(photos);
      handleUserForm(photos);
      addHandlers(photos);
      onSuccess(photos);
    });


const sendData = (onSuccess, onFail, body) =>
  fetch(
    'https://28.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
    })
    .catch(() => {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
    });

export { getData, sendData };
