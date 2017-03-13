class Bimestre {
    private _nota1: number;

    get nota1(): number {
        return this._nota1;
    }

    set nota1(nota1: number) {
        this._nota1 = nota1;
    }

    getNota1(){
        return this._nota1;
    }

    setNota(nota1:  number) {
        this._nota1 = nota1;
    }
}


let bimestre = new Bimestre();
bimestre.nota1 = 10;

console.log('1º nota: ' + bimestre.nota1);
