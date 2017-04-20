/*Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks 
whether the two arrays have the "same" elements, with the same multiplicities. 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.*/


function comp(array1, array2){
  if (!array1 || !array2 || array1.length !== array2.length) {
  	return false;
  }
  return array2.map(num => Math.sqrt(num)).sort().every( (num, i) => num === array1.sort()[i]); 
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

let a3 = [121, 144, 19, 161, 19, 144, 19, 11];
let a4 = [11*12, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

var result = comp(a1, a2);
console.log(`Should return: true. Output is: ${result}`);

var result = comp(a3, a4);
console.log(`Should return: false. Output is: ${result}`);



