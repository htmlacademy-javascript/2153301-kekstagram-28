const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createObject = () => (
  {
    id: getRandomArrayElement(ID),
    url: `photos/${getRandomArrayElement(URL)}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomArrayElement(LIKES),
    avatar: `img/avatar-${getRandomArrayElement(AVATAR)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    messageId: getRandomArrayElement(MESSAGE_ID),
    name: getRandomArrayElement(NAME)
  }
);

const similarObject = Array.from({ length: QUANTITY_PHOTOS }, createObject);

// console.log(similarObject);
