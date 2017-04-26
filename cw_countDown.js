// https://www.codewars.com/kata/58f85908bc60c645d5000095/solutions/javascript

countDown=n=>n+2+[n+1]+n;

var result = countDown(1);
console.log(`Should return: "321". Output is: ${result}`);

var result = countDown(10);
console.log(`Should return: "121110". Output is: ${result}`);
