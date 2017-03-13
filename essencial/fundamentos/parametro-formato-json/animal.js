var Javali = (function () {
    function Javali() {
    }
    Javali.prototype.mover = function (unidade) {
        console.log('Javali moveu-se ' + unidade.distancia);
    };
    return Javali;
}());
var Kilometro = (function () {
    function Kilometro() {
    }
    return Kilometro;
}());
var animal = new Javali();
var km = new Kilometro();
km.distancia = 0.1;
animal.mover(km);
animal.mover({ distancia: 0.2 });
