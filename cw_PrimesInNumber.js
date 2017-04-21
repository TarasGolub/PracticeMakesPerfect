/*Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"*/

function primeFactors(n){
    let result = '';
    for (let i = 2; i <= n; i++) {
        if (isPrime(i) && (n % i === 0) ) {
            n /= i;
            result += '(' + i;
            let count = 1;
            while (n % i === 0) {
                count++;
                n /= i;
            }
            if (count > 1) {
                result += '**' + count; 
            } 
            result += ')';
        }
    }

    return result;

    function isPrime(num) {
        for (let i = 2; i < Math.sqrt(num + 1); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

var result = primeFactors(86240);
console.log(`Should return: "(2**5)(5)(7**2)(11)". Output is: ${result}`);

var result = primeFactors(7775460);
console.log(`Should return: "(2**2)(3**3)(5)(7)(11**2)(17)". Output is: ${result}`);


// more elegant
// function primeFactors(n){
//     let result = '';
//     for (let i = 2; i <= n; i++) {
//         let count = 0;
//         while (n % i === 0) {
//             count++;
//             n /= i;
//         }
//         if (count) {
//             result += `(${i}${(count > 1 ? '**' + count : '')})`;
//         }
//     }
//     return result;
// }