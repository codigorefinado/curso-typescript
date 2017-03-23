class Mensagem {
  static mostrarMensagem(firstName: string, ...restOfName: string[]) {
    //console.log(firstName + " " + restOfName.join(" "));
    console.log(restOfName);
  }
}
Mensagem.mostrarMensagem("Fulano", "de", "Tal", "mais", "coisas");


function iTakeItAll(first, second, ...allOthers) {
  console.log(allOthers);
}
iTakeItAll('foo', 'bar'); // []
iTakeItAll('foo', 'bar', 'bas', 'qux'); // ['bas','qux']