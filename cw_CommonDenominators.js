function convertFrac(lst){
  let maxD = lst.reduce((max, curr) => curr[1] > max ? curr[1] : max, 0);
  let newD;
  let i = 1;
  let res = '';
  while (true) {
    newD = maxD * i++;
    if (lst.every(el => newD % el[1] === 0)) {
        break;
    }
  }
  lst.forEach(el => res += `(${el[0]*newD/el[1]},${newD})`);
  return res;
}

var lst = [ [1, 2], [1, 3], [1, 4] ];
var result = convertFrac(lst);
console.log(`Should return: "(6,12)(4,12)(3,12)". Output is: ${result}`);