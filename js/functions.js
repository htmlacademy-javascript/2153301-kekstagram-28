 function checkLengthLine ( line ) {
   return line <= 20;
}

 function checkPalindrome ( str ) {
   str = str.toUpperCase().replace(/\s/g, '');
   return str === str.split('').reverse().join('');
 }

function findAllNumber (str) {
  return str.replace(/[^0-9]/g,'');
}
// function generationAddress (iStr, time, addStr ) {
//   let address =
// }



 //console.log(findAllNumber('ECMAScript 2022'));

 // console.log(checkPalindrome ('шалаш'));

 // console.log(checkLengthLine(30));


