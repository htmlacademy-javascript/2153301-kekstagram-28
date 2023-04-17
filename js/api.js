const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';
const chosenRoute = {
  GET_DATA: '/data',
  SEND_DATA: '',
};
const chosenMethod = {
  GET: 'GET',
  POST: 'POST',
};
const listErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const load = (route, errorText, method = chosenMethod.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(chosenRoute.GET_DATA, listErrorText.GET_DATA);


const sendData = (body) => load(chosenRoute.SEND_DATA, listErrorText.SEND_DATA, chosenMethod.POST, body);

export { getData, sendData };
