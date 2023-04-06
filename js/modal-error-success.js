import { isEscapeKey } from './util.js';

const templateError = document.querySelector('#error').content.querySelector('.error');
const errorMessage = templateError.querySelector('.error__title');
const errorButton = templateError.querySelector('.error__button');

const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const successMessage = templateSuccess.querySelector('.success__title');
const successButton = templateSuccess.querySelector('.success__button');

const body = document.querySelector('body');

const closeModalMessage = () => {
  
};

const handleEscapeKeydown = (evt) => {
  if(isEscapeKey(evt)) {

  }
};

const sendDataError = () => {
  const cloneErrorSend = templateError.cloneNode(true);
};


// body.append(cloneErrorSend)




