// https://www.codewars.com/kata/a-chain-adding-function/javascript

function add(n){
    var answer =  function(m) {
        return add(m+n);
    }
    answer.n = n;
  
    answer.toString = function(){
        return this.n;
    }

    return answer;
}
 // Function.prototype.toString = function(){
 //    return this.n;
 // }

var result = add(1);
console.log(`Should return: "1". Output is: ${result}`);

var result = add(1)(2);
console.log(`Should return: "3". Output is: ${result}`);

var result = add(1)(2)(3);
console.log(`Should return: "6". Output is: ${result}`);

var addTwo = add(2);
console.log(`Should return: "2". Output is: ${addTwo}`);

var seven = addTwo + 5;
console.log(`Should return: "7". Output is: ${seven}`);

var ten = addTwo(3)(5);
console.log(`Should return: "10". Output is: ${ten}`);


// more elegant:
// var add = function(n) {
//   const f = x => add(n + x)
//   f.valueOf = () => n
//   return f;
// }