/*The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

We will write a function gap with parameters:

g (integer >= 2) which indicates the gap we are looking for

m (integer > 2) which gives the start of the search (m inclusive)

n (integer >= m) which gives the end of the search (n inclusive)

In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise nil or null or None or Nothing (depending on the language). In C++ return in such a case {0, 0}.*/

function gap(g, m, n) {

    let prev;
    for (let i = m; i <=n; i++) {
        if (isPrime(i)) {
            console.log(prev, i);
            if (prev && (i - prev === g) ) {
                return [prev, i];
            }
            prev = i;
        }
    }
    return null;


    function isPrime(num) {
        for (let i = 2; i < Math.sqrt(num) + 1; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}


var result = gap(2,100,110);
console.log(`Should return: [101, 103]. Output is: ${result}`);

var result = gap(4,100,110);
console.log(`Should return: [103, 107]. Output is: ${result}`);

var result = gap(6,100,110);
console.log(`Should return: null. Output is: ${result}`);

var result = gap(8,300,400);
console.log(`Should return: [359, 367]. Output is: ${result}`);

// function gap(g, m, n) {

//     console.log(1);
//     let arr = [];
//     for (let i = 2; i < n; i++) {
//      arr[i] = i;
//     }
// console.log(2);
//     let p = 2;
//     while (true) {
//         for (let i = p; i < n; i += p ) {
//             arr[i] = false;
//         }
//         p = arr.indexOf(true, ++p)
//         if (p*p > n) break;
//     }
    
//     let prev = arr.indexOf(true, m);
//     if (prev === -1) return null;
    
//     let next = prev + 1;

//     while(true) {
//         next = arr.indexOf(true, next);
//         if (next === -1) return null;
//         if (next - prev === g) return [prev, next];
//         prev = next;
//         ++next;
//     }
// }