var Ponto = (function () {
    function Ponto(p) {
        this._x = 0;
        this._y = 0;
        this._x = p.x;
        this._y = p.y;
    }
    return Ponto;
}());
var p1 = new Ponto({ x: 10, y: 20 });
console.log(p1);
