"use strict";
var Bimestre = (function () {
    function Bimestre(nota1, nota2, nota3, nota4) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
    Bimestre.prototype.soma = function (nota1, nota2, nota3, nota4) {
        return nota1 + nota2 + nota3 + nota4;
    };
    return Bimestre;
}());
exports.Bimestre = Bimestre;
var notasBimestre1 = [7, 10, 9, 8];
var bimestre = new (Bimestre.bind.apply(Bimestre, [void 0].concat(notasBimestre1)))();
console.log('1º nota: ' + bimestre.nota1);
console.log('Soma das notasDoBimestre1: ' + bimestre.soma.apply(bimestre, notasBimestre1));
