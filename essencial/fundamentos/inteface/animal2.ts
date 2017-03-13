interface Animal {
    mover(distancia: UnidadeMedida);
}

class Minhoca implements Animal {
    mover(distancia: UnidadeMedida) {
        console.log('Javali rasteja ' + distancia.distancia());
    }
}

class Cavalo implements Animal {
    mover(distancia: Metros) {
        console.log('Cavalo trotou ' + distancia.distancia());
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
animal.mover(new Metros(4));

animal = new Minhoca();
animal.mover(new Milimetros(4));
animal.mover(new Metros(4));
