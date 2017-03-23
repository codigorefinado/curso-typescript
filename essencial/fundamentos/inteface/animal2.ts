interface Animal {
    mover(distancia: UnidadeMedida);
}

class Minhoca implements Animal {
    mover(unidade: UnidadeMedida) {
        console.log('Minhoca rasteja ' + unidade.distancia());
    }
}

class Cavalo implements Animal {
    mover(unidade: Metros) {
        console.log('Cavalo trotou ' + unidade.distancia());
    }
}

interface UnidadeMedida {
    distancia(): string;
}

class Metros implements UnidadeMedida {
    constructor(private valor: number) {
    }

    distancia(): string {
        return this.valor + ' metros'
    }
}

class Milimetros implements UnidadeMedida {
    constructor(private valor: number) {
    }

    distancia(): string {
        return this.valor + ' milimetros'
    }
}


let cavalo: Cavalo = new Cavalo();
cavalo.mover(new Metros(4));

// cavalo.mover(new Milimetros(4));

let animal: Animal = new Cavalo();
animal.mover(new Metros(3));

animal = new Minhoca();
animal.mover(new Milimetros(7));
animal.mover(new Metros(8));
