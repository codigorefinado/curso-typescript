class Bimestre {

  constructor(public nota1: number, public nota2: number, public nota3: number, public nota4: number) {
  }

  public soma(nota1: number, nota2: number, nota3: number, nota4: number): number {
    return nota1 + nota2 + nota3 + nota4;
  }
}

let notasBimestre1 = [ 7, 10, 9, 8 ];
let bimestre: Bimestre = new Bimestre(notasBimestre1[ 0 ], notasBimestre1[ 1 ], notasBimestre1[ 2 ], notasBimestre1[ 3 ]);

console.log('1º nota: ' + bimestre.nota1);

// console.log('1º nota: ' + bimestre.nota1);
// console.log('1º nota: ' + bimestre.getNota1());

//console.log('Soma das notasDoBimestre1: ' + bimestre.soma(...notasBimestre1));