function soma(nota1, nota2, nota3, nota4) {
    return nota1 + nota2 + nota3 + nota4;
}
var notasBimestre1 = [7, 10, 9, 8];
console.log('Soma das notasDoBimestre1: ' + soma.apply(void 0, notasBimestre1));
var notasBimestre2 = [6, 8, 7, 9];
var notasBimestre3 = [7, 7, 9, 9];
var notasBimestre4 = [9, 10, 7, 9];
var notasAnual = { notasBimestre1: notasBimestre1, notasBimestre2: notasBimestre2, notasBimestre3: notasBimestre3, notasBimestre4: notasBimestre4 };
console.log(notasAnual);
