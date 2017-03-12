"use strict";
var Bimestre = (function () {
    function Bimestre(nota1, nota2, nota3, nota4) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
    Bimestre.soma = function (nota1, nota2, nota3, nota4) {
        return nota1 + nota2 + nota3 + nota4;
    };
    return Bimestre;
}());
exports.Bimestre = Bimestre;
var notasBimestre1 = [7, 10, 9, 8];
var bimestre = new (Bimestre.bind.apply(Bimestre, [void 0].concat(notasBimestre1)))();
console.log('1º nota: ' + bimestre.nota1);
console.log('Soma das notasDoBimestre1: ' + Bimestre.soma.apply(Bimestre, notasBimestre1));
var notasBimestre2 = [6, 8, 7, 9];
var notasAnual = { notasBimestre1: notasBimestre1, notasBimestre2: notasBimestre2 };
console.log(notasAnual);
