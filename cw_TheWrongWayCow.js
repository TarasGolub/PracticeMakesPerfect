
/*Well.... not quite always.

One stubborn cow wants to be different from the rest of the herd - it's that damn Wrong-Way Cow!

Task

Given a field of cows find which one is the Wrong-Way Cow and return her position.

Notes:

There are always at least 3 cows in a herd
There is only 1 Wrong-Way Cow!
Fields are rectangular
The cow position is zero-based [x,y] of her head (i.e. the letter c)*/

findWrongWayCow = function(field) {
    let [l,r,u,d,cows] = [[],[],[],[],[]];

    field.forEach( (row, i) => {
        let pos = row.indexOf('c');
        while (pos !== -1) {
            cows.push([i, pos]);
            pos = row.indexOf('c', ++pos);
        }
    });

    cows.forEach( cow => {
        let [x, y] = [cow[0], cow[1]];

        if (field[x][y + 1] == 'o') {
            r.push(cow);
        } else if (field[x][y - 1] == 'o') {
            l.push(cow);
        } else if (field[x + 1] && field[x + 1][y] == 'o') {
            d.push(cow);
        } else if (field[x - 1] && field[x - 1][y] == 'o') {
            u.push(cow);
        }
    });
    
    return [r,l,d,u].sort( (a,b) => b.length - a.length)[1][0].reverse();
}


var field1 = [
      "cow.cow.cow.cow.cow".split(''),
      "cow.cow.cow.cow.cow".split(''),
      "cow.woc.cow.cow.cow".split(''),
      "cow.cow.cow.cow.cow".split('')
    ];

var field2 = [
      "c..........".split(''),
      "o...c......".split(''),
      "w...o.c....".split(''),
      "....w.o....".split(''),
      "......w.cow".split('')
    ];

var result = findWrongWayCow(field1);
console.log(`Should return: [6,2]. Output is: ${result}`);

var result = findWrongWayCow(field2);
console.log(`Should return: [8,4]. Output is: ${result}`);
