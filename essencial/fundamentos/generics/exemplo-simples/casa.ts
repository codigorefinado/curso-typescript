class Casa<T> {
  constructor(private morador: T) {
  }

  quemMora() {
    console.log(this.morador);
  }

}


class Pai {
  nome: string = 'Clayton';
}

class Filha {
  name: string = 'Catherine';
}


let casa: Casa<Pai> = new Casa(new Pai());
casa.quemMora();

//casa = new Casa(new Filha());
