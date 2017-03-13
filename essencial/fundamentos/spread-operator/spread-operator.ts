function soma(nota1: number, nota2: number, nota3: number, nota4: number): number {
    return nota1 + nota2 + nota3 + nota4;
}

let notasBimestre1 = [ 7, 10, 9, 8 ];
console.log('Soma das notasDoBimestre1: ' + soma(...notasBimestre1));



let notasBimestre2 = [ 6, 8, 7, 9 ];
let notasBimestre3 = [ 7, 7, 9, 9 ];
let notasBimestre4 = [ 9, 10, 7, 9 ]

let notasAnual = { ...notasBimestre1, ...notasBimestre2, ...notasBimestre3, ...notasBimestre4 };
console.log(" Conteúdo do notasAnual " + JSON.stringify(notasAnual));