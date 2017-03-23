//array destructing
var x = 1, y = 2;
_a = [y, x], x = _a[0], y = _a[1];
console.log(x, y); // 2,1
var x = 10, y = 20;
var t = 0, v = 0;
_b = [y, x], t = _b[0], v = _b[1];
console.log(t, v);
var _a, _b;
