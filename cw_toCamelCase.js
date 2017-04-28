// https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript

const toCamelCase = (str) => str.replace(/[-_]\w/g, (s) => s[1].toUpperCase())


var result = toCamelCase("the_stealth_warrior");
console.log(`Should return: "theStealthWarrior". Output is: ${result}`);

var result = toCamelCase("The-Stealth-Warrior");
console.log(`Should return: "TheStealthWarrior". Output is: ${result}`);