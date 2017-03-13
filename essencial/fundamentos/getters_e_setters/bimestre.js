var Bimestre = (function () {
    function Bimestre() {
    }
    Object.defineProperty(Bimestre.prototype, "nota1", {
        get: function () {
            return this._nota1;
        },
        set: function (nota1) {
            this._nota1 = nota1;
        },
        enumerable: true,
        configurable: true
    });
    Bimestre.prototype.getNota1 = function () {
        return this._nota1;
    };
    Bimestre.prototype.setNota = function (nota1) {
        this._nota1 = nota1;
    };
    return Bimestre;
}());
var bimestre = new Bimestre();
bimestre.nota1 = 10;
console.log('1º nota: ' + bimestre.nota1);
