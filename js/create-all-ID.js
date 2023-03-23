
// создание порядкового ID картинки
const createIdGeneratorPicture = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generatePhotoId = createIdGeneratorPicture();

// создание порядкового ID комментария
const createIdGeneratorComment = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGeneratorComment();

export {generatePhotoId}
export {generateCommentId};
