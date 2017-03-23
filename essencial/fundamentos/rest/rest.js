var Mensagem = (function () {
    function Mensagem() {
    }
    Mensagem.mostrarMensagem = function (firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        //console.log(firstName + " " + restOfName.join(" "));
        console.log(restOfName);
    };
    return Mensagem;
}());
Mensagem.mostrarMensagem("Fulano", "de", "Tal", "mais", "coisas");
function iTakeItAll(first, second) {
    var allOthers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        allOthers[_i - 2] = arguments[_i];
    }
    console.log(allOthers);
}
iTakeItAll('foo', 'bar'); // []
iTakeItAll('foo', 'bar', 'bas', 'qux'); // ['bas','qux']
