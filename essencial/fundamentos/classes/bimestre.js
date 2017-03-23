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
var notasBimestre1 = [7, 10, 9, 8];
var bimestre = new Bimestre(notasBimestre1[0], notasBimestre1[1], notasBimestre1[2], notasBimestre1[3]);
console.log('1º nota: ' + bimestre.nota1);
// console.log('1º nota: ' + bimestre.nota1);
// console.log('1º nota: ' + bimestre.getNota1());
//console.log('Soma das notasDoBimestre1: ' + bimestre.soma(...notasBimestre1)); 
