class Mensagem {
  static alertName(firstName: string, ...restOfName: string[]) {
    console.log(firstName + " " + restOfName.join(" "));
    //console.log(restOfName);
  }
}
Mensagem.alertName("Fulano", "de", "Tal");