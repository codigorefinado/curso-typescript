class Bimestre {
    constructor(public nota1: number, public nota2: number, public nota3: number, public nota4: number) {
    }

    public static soma(nota1: number, nota2: number, nota3: number, nota4: number): number {
        return nota1 + nota2 + nota3 + nota4;
    }
}

let notasBimestre1 = [ 7, 10, 9, 8 ];

let bimestre = new Bimestre(...notasBimestre1);

console.log('1º nota: ' + bimestre.nota1);
console.log('Soma das notasDoBimestre1: ' + Bimestre.soma(...notasBimestre1));