var Bimestre = (function () {
    function Bimestre(nota1, nota2, nota3, nota4) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
    return Bimestre;
}());
var bimestre = new Bimestre(7, 10, 9, 8);
//object destructing
var nota1 = bimestre.nota1, nota2 = bimestre.nota2, nota3 = bimestre.nota3, nota4 = bimestre.nota4;
console.log(nota1, nota2, nota3, nota4);
