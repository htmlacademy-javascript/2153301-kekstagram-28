function checkLengthLine(line) {
  return line <= 20;
}

function checkPalindrome(str) {
  str = str.toUpperCase().replace(/\s/g, '');
  return str === str.split('').reverse().join('');
}

let resultNumber = '';
const extractNumber = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      resultNumber += string.at(i);
    }
  }
};


// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.

const leftPad = (text, minLength, addCharacters) => {
  const inputText = text.toString();
  // приводим text к строке и пишем в переменную inputText
  const inputAddCharacters = addCharacters.toString();
  // приводим addCharacters к строке и пишем в переменную inputAddCharacters
  if (inputText.length < minLength) {
    const outputAddCharaters = inputAddCharacters.repeat(minLength - inputText.length);
    // повторяем добавочную строку (minLength-inputText.length) раз
    return outputAddCharaters.slice(0, minLength - inputText.length) + inputText;
    /* возвращаем массив outputAddCharaters от 0 до (minLength-inputText.length)
    и добавляем введенный текст если текст меньше указанной длины
    */
  }
  return inputText;
  // возвращаем введенный текст если он больше указанной длины
};

