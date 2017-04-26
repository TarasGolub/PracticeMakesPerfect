// https://www.codewars.com/kata/58f85bb1985886b1b5000b6f/solutions/javascript

countDown=n=>n+2+`!${n+1}!`+n;

var result = countDown(1);
console.log(`Should return: "3!2!1". Output is: ${result}`);

var result = countDown(10);
console.log(`Should return: "12!11!10". Output is: ${result}`);

