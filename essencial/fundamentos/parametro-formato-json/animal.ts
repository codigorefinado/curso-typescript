class Javali {
  mover(unidade: UnidadeMedida) {
    console.log('Javali moveu-se ' + unidade.distancia);
  }
}

interface UnidadeMedida {
  distancia: number;
}

class Kilometro implements UnidadeMedida {
  distancia: number;
}

let animal: Javali = new Javali();
let km = new Kilometro();
km.distancia = 0.1;
animal.mover(km);

animal.mover({ distancia: 0.2 });

