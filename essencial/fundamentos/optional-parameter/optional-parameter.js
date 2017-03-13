function add(num1, num2, num3) {
    console.log('num3 é ' + num3);
    if (isNaN(num3)) {
        return num1 + num2;
    }
    return num1 + num2 + num3;
}
console.log(add(10, 20));
