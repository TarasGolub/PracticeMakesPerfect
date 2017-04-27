// https://www.codewars.com/kata/calculating-with-functions/train/javascript

const zero      = (n) =>!n ? 0 : n.call(null, 0);
const one       = (n) =>!n ? 1 : n.call(null, 1);
const two       = (n) =>!n ? 2 : n.call(null, 2);
const three     = (n) =>!n ? 3 : n.call(null, 3);
const four      = (n) =>!n ? 4 : n.call(null, 4);
const five      = (n) =>!n ? 5 : n.call(null, 5);
const six       = (n) =>!n ? 6 : n.call(null, 6);
const seven     = (n) =>!n ? 7 : n.call(null, 7);
const eight     = (n) =>!n ? 8 : n.call(null, 8);
const nine      = (n) =>!n ? 9 : n.call(null, 9);

function plus(n) {
    return (a) => a+n;
}
function minus(n) {
    return (a) => a-n;
}
function times(n) {
    return (a) => a*n;
}
function dividedBy(n) {
    return (a) => a/n;
}

// console.log('1', five());
// console.log('2', times(5));
// console.log('3', seven(times(5)));

var result = seven(times(five()));
console.log(`Should return: "35". Output is: ${result}`);

var result = four(plus(nine()));
console.log(`Should return: "13". Output is: ${result}`);

var result = eight(minus(three()));
console.log(`Should return: "5". Output is: ${result}`);

var result = six(dividedBy(two()));
console.log(`Should return: "3". Output is: ${result}`);