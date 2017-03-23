//Array Destructuring com ignores

var [ x, , ...remaining ] = [ 1, 2, 3, 4 ];
console.log(x, remaining); // 1, [3,4]