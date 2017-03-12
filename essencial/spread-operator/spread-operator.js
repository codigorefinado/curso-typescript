"use strict";
var Bimestre = (function () {
    function Bimestre() {
    }
    Bimestre.prototype.soma = function (nota1, nota2, nota3, nota4) {
        return nota1 + nota2 + nota3 + nota4;
    };
    return Bimestre;
}());
exports.Bimestre = Bimestre;
var notas = [7, 10, 9, 8];
var bimestre = new Bimestre();
console.log(bimestre.soma.apply(bimestre, notas));
