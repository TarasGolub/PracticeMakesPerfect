// https://www.codewars.com/kata/hangman-game/train/javascript

class Hangman {
  constructor(word) {
    this.word = word;
    this.res = word.split('').map(l => ({'guessed':false, 'let':l}));
    this.y = [];
    this.n = [];
  }
  
  guess(letter) {
    if (this.res.every(e => e.guessed == true) || this.n.length >= 7) {
      return `The game has ended.`;
    }
    let i = 0;
    
    if (this.word.indexOf(letter, i) === -1 && this.n.indexOf(letter) === -1) {
      this.n.push(letter);
      if (this.n.length >= 7) {
        return `You got hung! The word was ${this.word}.`;
      }
    }
    
    while (this.word.indexOf(letter, i) !== -1) {
      let pos = this.word.indexOf(letter, i);
      this.res[pos].guessed = true;
      if (this.res.every(e => e.guessed == true)) {
        return `You found the word! (${this.word})`;
      }
      i = pos + 1;
    }
    
    let str = '';
    this.res.forEach(e => str+= e.guessed ? e.let + ' ' : '_ ');
    str = str.slice(0, -1);
    
    if (this.n.length > 0) {
      str += ' # ';
      this.n.forEach(e => str+=e);
    }
    return str;
  }
}

let hangman = new Hangman('codet');

var result = hangman.guess('w');
console.log(`Should return: "_ _ _ _ _ # w". Output is: ${result}`);

var result = hangman.guess('a');
console.log(`Should return: "_ _ _ _ _ # wa". Output is: ${result}`);

var result = hangman.guess('r');
console.log(`Should return: "_ _ _ _ _ # war". Output is: ${result}`);

var result = hangman.guess('s');
console.log(`Should return: "_ _ _ _ _ # wars". Output is: ${result}`);

var result = hangman.guess('e');
console.log(`Should return: "_ _ _ e _ # wars". Output is: ${result}`);

var result = hangman.guess('d');
console.log(`Should return: "_ _ d e _ # wars". Output is: ${result}`);

var result = hangman.guess('o');
console.log(`Should return: "_ o d e _ # wars". Output is: ${result}`);

var result = hangman.guess('x');
console.log(`Should return: "_ o d e _ # warsx". Output is: ${result}`);

var result = hangman.guess('y');
console.log(`Should return: "_ o d e _ # warsxy". Output is: ${result}`);

var result = hangman.guess('z');
console.log(`Should return: "You got hung! The word was codet.". Output is: ${result}`);