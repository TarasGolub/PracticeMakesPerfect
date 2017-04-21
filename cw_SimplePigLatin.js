/*Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay*/


function pigIt(str){
  return str.split(' ').map(w => (w + w.charAt(0) + 'ay').slice(1)).join(' ');
}

var result = pigIt('Pig latin is cool');
console.log(`Should return: "igPay atinlay siay oolcay". Output is: ${result}`);

var result = pigIt('This is my string');
console.log(`Should return: "hisTay siay ymay tringsay". Output is: ${result}`);