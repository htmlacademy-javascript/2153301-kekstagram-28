import { getRandomArrayElement } from './util.js';
import {generatePhotoId, generateCommentId} from './create-all-ID.js';

const renderUrl = [];
for (let i = 1; i <= 25; i++) {
  renderUrl.push(i);
}

const renderDescription = [
  'Багровый закат',
  'Тайная вечеря',
  'Ленин и дети'
];

const renderLikes = [];
for (let i = 15; i <= 200; i++) {
  renderLikes.push(i);
}


const renderAvatar = [];
for (let i = 1; i <= 6; i++) {
  renderAvatar.push(i);
}

const renderMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const renderMessageId = [];
for (let i = 1; i <= 999; i++) {
  renderMessageId.push(i);
}

const renderName = [
  'Артём',
  'Артур',
  'Альфонс',
  'Адольф'
];

const COUNT_COPY = 25;

const COUNT_COMMENT = 3;

const createObject = () => ({
  id: generatePhotoId(),
  url: `photos/${getRandomArrayElement(renderUrl)}.jpg`,
  description: getRandomArrayElement(renderDescription),
  likes: getRandomArrayElement(renderLikes),
  comments: createComments(),
});

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomArrayElement(renderAvatar)}.svg`,
  message: getRandomArrayElement(renderMessages),
  name: getRandomArrayElement(renderName),
})

const createObjects = () => Array.from({ length: COUNT_COPY }, createObject);

const createComments = () => Array.from({ length: COUNT_COMMENT }, createComment);

export { createObjects };

// console.log(createObjects());
// console.log(createComments());
