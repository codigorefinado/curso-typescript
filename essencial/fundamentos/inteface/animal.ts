interface Animal {
    mover(distancia: number);
}

class Minhoca implements Animal {
    mover(distancia: number) {
        console.log('Minhoca rasteja ' + distancia + ' metros');
    }
}

class Cavalo implements Animal {
    mover(distancia: number) {
        console.log('Cavalo trotou ' + distancia + ' metros');
    }
}

let cavalo: Cavalo = new Cavalo();
cavalo.mover(4);

let animal: Animal = new Cavalo();
animal.mover(5);

animal = new Minhoca();
animal.mover(3);



