class Bimestre {
  constructor(public nota1: number, public nota2: number, public nota3: number, public nota4: number) {
  }
}

let bimestre: Bimestre = new Bimestre(7, 10, 9, 8);

//object destructing
let { nota1, nota2, nota3, nota4 } = bimestre;

console.log(nota1, nota2, nota3, nota4);

