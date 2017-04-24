// https://www.codewars.com/kata/the-maximum-and-minimum-difference-simple-version/train/javascript

function maxAndMin(arr1,arr2){
    let maxD = arr1.reduce((prev, curr)=>{
        let max = 0;
        arr2.forEach(n => {max = (Math.abs(n-curr) > max) ? Math.abs(n-curr) : max});
        return (max > prev) ? max : prev;
    },0);

    let minD = arr1.reduce((prev, curr)=>{
        let min = maxD;
        arr2.forEach(n => {min = (Math.abs(n-curr) < min) ? Math.abs(n-curr) : min});
        return (min < prev) ? min : prev;
    },maxD);
  
    return [maxD, minD];
}

var result = maxAndMin([3,10,5],[20,7,15,8]);
console.log(`Should return: "[17,2]". Output is: ${result}`);

var result = maxAndMin([3],[20]);
console.log(`Should return: "[17,17]". Output is: ${result}`);

var result = maxAndMin([3,10,5],[3,10,5]);
console.log(`Should return: "[7,0]". Output is: ${result}`);

var result = maxAndMin([1,2,3,4,5],[6,7,8,9,10]);
console.log(`Should return: "[9,1]". Output is: ${result}`);


// More Elegant: 

/*function maxAndMin(arr1,arr2){
  return arr1.reduce((acc, curr) => {
    arr2.forEach(num => {
      const newNum = Math.abs(num - curr)
      if (newNum > acc[0]) acc[0] = newNum
      if (newNum < acc[1]) acc[1] = newNum
    })
    return acc
  }, [-Infinity, Infinity])
}*/