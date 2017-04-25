// https://www.codewars.com/kata/the-maximum-and-minimum-difference-simple-version/train/javascript

function maxAndMin(arr1,arr2){
    arr1 = arr1.sort((a,b)=>a-b);
    arr2 = arr2.sort((a,b)=>a-b);

    let l1 = arr1.length;
    let l2 = arr2.length;

    let max1 = arr1[l1-1] - arr2[0];
    let max2 = arr2[l2-1] - arr1[0];
    let maxD = max1 > max2 ? max1 : max2;

    let minD = maxD;
    for (let i = 0; i < l1; i++) {
      let min = minD;
      for (let j = 0; j < l2; j++) {
        if (Math.abs(arr2[j] - arr1[i]) < min) {
          min = Math.abs(arr2[j] - arr1[i]);
          if (min === 0) break;
        }
      }
      if (min < minD) {
        minD = min;
        if (minD ===0) break;
      }
    }
    
  
    return [maxD, minD];
}

var result = maxAndMin([3,4,10,5],[20,7,15,8]);
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