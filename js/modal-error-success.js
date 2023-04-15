import { isEscapeKey } from './util.js';

const templateError = document.querySelector('#error').content.querySelector('.error');
const templateSuccess = document.querySelector('#success').content.querySelector('.success');

const showSuccessMessage = () => {
  const cloneSuccessSend = templateSuccess.cloneNode(true);
  const successButton = cloneSuccessSend.querySelector('.success__button');

  successButton.addEventListener('click', () => {
    cloneSuccessSend.remove();
  });

  cloneSuccessSend.addEventListener('click', (evt) => {
    if (evt.target.getAttribute('id') === 'success-block') {
      cloneSuccessSend.remove();
    }
  });

  document.body.append(cloneSuccessSend);




  const escapeKeydownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      cloneSuccessSend.remove();
      closeSuccessMessage();
    }
  };

  const closeSuccessMessage = () => {
    document.removeEventListener('keydown', escapeKeydownHandler);
  };

  document.addEventListener('keydown', escapeKeydownHandler);

};

const showErrorMessage = () => {
  const cloneErrorSend = templateError.cloneNode(true);
  const errorButton = cloneErrorSend.querySelector('.error__button');

  errorButton.addEventListener('click', () => {
    cloneErrorSend.remove();
  });

  cloneErrorSend.addEventListener('click', (evt) => {
    if (evt.target.getAttribute('id') === 'error-block') {
      cloneErrorSend.remove();
    }
  });

  document.body.append(cloneErrorSend);

  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      cloneErrorSend.remove();
    }
  });
};

export {showSuccessMessage, showErrorMessage};
