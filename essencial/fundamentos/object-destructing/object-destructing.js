var rect = { x: 0, y: 10, width: 15, height: 20 };
// Destructuring assignment
var x = rect.x, y = rect.y, width = rect.width, height = rect.height;
console.log(x, y, width, height); // 0, 10, 15, 20
// não funciona pro caso da variável b
// var { b, y, width, height } = rect;
// console.log(b, y, width, height); // undefined, 10, 15, 20 
