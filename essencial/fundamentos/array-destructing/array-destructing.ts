//array destructing
var x = 1, y = 2;
[ x, y ] = [ y, x ];
console.log(x, y); // 2,1


var x = 10, y = 20;

var t = 0, v = 0;
[ t, v ] = [ y, x ];
console.log(t, v);

