import { escapeKeydownUserFormHandler } from './user-form.js';
import { isEscapeKey } from './util.js';

const templateError = document.querySelector('#error').content.querySelector('.error');
const templateSuccess = document.querySelector('#success').content.querySelector('.success');

const showSuccessMessage = () => {
  const cloneSuccessSend = templateSuccess.cloneNode(true);
  const successButton = cloneSuccessSend.querySelector('.success__button');

  document.body.append(cloneSuccessSend);

  const escapeKeydownHandler = (evt) => {
    if(isEscapeKey(evt)) {
      cloneSuccessSend.remove();
      document.removeEventListener('keydown', escapeKeydownHandler);
    }
  };

  successButton.addEventListener('click', () => {
    cloneSuccessSend.remove();
    document.removeEventListener('keydown', escapeKeydownHandler);
  });

  cloneSuccessSend.addEventListener('click', (evt) => {
    if (evt.target.getAttribute('id') === 'success-block') {
      cloneSuccessSend.remove();
      document.removeEventListener('keydown', escapeKeydownHandler);
    }
  });

  document.addEventListener('keydown', escapeKeydownHandler);
};

const showErrorMessage = () => {
  const cloneErrorSend = templateError.cloneNode(true);
  const errorButton = cloneErrorSend.querySelector('.error__button');

  document.body.append(cloneErrorSend);

  const escapeKeydownModalHandler = (evt) => {
    if(isEscapeKey(evt)) {
      cloneErrorSend.remove();
      document.removeEventListener('keydown', escapeKeydownModalHandler);
      document.addEventListener('keydown', escapeKeydownUserFormHandler);
    }
  };

  document.addEventListener('keydown', escapeKeydownModalHandler);

  errorButton.addEventListener('click', () => {
    cloneErrorSend.remove();
    document.removeEventListener('keydown', escapeKeydownModalHandler);
    document.addEventListener('keydown', escapeKeydownUserFormHandler);
  });

  cloneErrorSend.addEventListener('click', (evt) => {
    if (evt.target.getAttribute('id') === 'error-block') {
      cloneErrorSend.remove();
      document.removeEventListener('keydown', escapeKeydownModalHandler);
      document.addEventListener('keydown', escapeKeydownUserFormHandler);
    }
  });
};

export {showSuccessMessage, showErrorMessage};
