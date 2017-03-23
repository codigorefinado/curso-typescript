var Minhoca = (function () {
    function Minhoca() {
    }
    Minhoca.prototype.mover = function (unidade) {
        console.log('Minhoca rasteja ' + unidade.distancia());
    };
    return Minhoca;
}());
var Cavalo = (function () {
    function Cavalo() {
    }
    Cavalo.prototype.mover = function (unidade) {
        console.log('Cavalo trotou ' + unidade.distancia());
    };
    return Cavalo;
}());
var Metros = (function () {
    function Metros(valor) {
        this.valor = valor;
    }
    Metros.prototype.distancia = function () {
        return this.valor + ' metros';
    };
    return Metros;
}());
var Milimetros = (function () {
    function Milimetros(valor) {
        this.valor = valor;
    }
    Milimetros.prototype.distancia = function () {
        return this.valor + ' milimetros';
    };
    return Milimetros;
}());
var cavalo = new Cavalo();
cavalo.mover(new Metros(4));
// cavalo.mover(new Milimetros(4));
var animal = new Cavalo();
animal.mover(new Metros(3));
animal = new Minhoca();
animal.mover(new Milimetros(7));
animal.mover(new Metros(8));
