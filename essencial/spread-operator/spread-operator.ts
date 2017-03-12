export class Bimestre {
    constructor() {
    }

    public soma(nota1: number, nota2: number, nota3: number, nota4: number): number {
        return nota1 + nota2 + nota3 + nota4;
    }
}

let notas = [ 7, 10, 9, 8 ];

let bimestre = new Bimestre();
console.log(bimestre.soma(...notas));
