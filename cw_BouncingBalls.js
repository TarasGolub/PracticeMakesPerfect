// A child plays with a ball on the nth floor of a big building. The height of this floor is known:
// (float parameter "h" in meters, h > 0) .
// He lets out the ball. The ball rebounds for example to two-thirds:
// (float parameter "bounce", 0 < bounce < 1)
// of its height.
// His mother looks out of a window that is 1.5 meters from the ground:
// (float parameters window < h).
// How many times will the mother see the ball either falling or bouncing in front of the window
// (return a positive integer unless conditions are not fulfilled in which case return -1) ?
// Note
// You will admit that the ball can only be seen if the height of the rebouncing ball is stricty greater than the window parameter.


function bouncingBall(h,  bounce,  window) {
  if ( !h || !bounce || !window || h <= 0.0 || bounce <= 0.0 || bounce >= 1.0 || window >= h) {
  	return -1;
  }
  var count = 1;
  while ( (h *= bounce) >= window) {
  	count += 2;
  }
  return count;
}




var result = bouncingBall(3.0, 0.66, 1.5);
console.log(`Should return: 3. Output is: ${result}`);

var result1 = bouncingBall(30.0, 0.66, 1.5);
console.log(`Should return: 15. Output is: ${result1}`);

