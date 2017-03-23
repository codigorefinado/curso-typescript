var Minhoca = (function () {
    function Minhoca() {
    }
    Minhoca.prototype.mover = function (distancia) {
        console.log('Minhoca rasteja ' + distancia + ' metros');
    };
    return Minhoca;
}());
var Cavalo = (function () {
    function Cavalo() {
    }
    Cavalo.prototype.mover = function (distancia) {
        console.log('Cavalo trotou ' + distancia + ' metros');
    };
    return Cavalo;
}());
var cavalo = new Cavalo();
cavalo.mover(4);
var animal = new Cavalo();
animal.mover(5);
animal = new Minhoca();
animal.mover(3);
