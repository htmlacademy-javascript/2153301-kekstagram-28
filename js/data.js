import {getRandomArrayElement} from './util.js';

const ID = [];
for (let i = 1; i <= 25; i++) {
  ID.push(i);
}


const URL = [];
for (let i = 1; i <= 25; i++) {
  URL.push(i);
}


const DESCRIPTION = [
  'Багровый закат',
  'Тайная вечеря',
  'Ленин и дети'
];

const LIKES = [];
for (let i = 15; i <= 200; i++) {
  LIKES.push(i);
}


const AVATAR = [];
for (let i = 1; i <= 6; i++) {
  AVATAR.push(i);
}

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const MESSAGE_ID = [];
for (let i = 1; i <= 999; i++) {
  MESSAGE_ID.push(i);
}

const NAME = [
  'Артём',
  'Артур',
  'Альфонс',
  'Адольф'
];

const QUANTITY_PHOTOS = 25;

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

const createObjects = () => Array.from({ length: QUANTITY_PHOTOS }, createObject);

export {createObjects};
