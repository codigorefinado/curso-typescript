var Mensagem = (function () {
    function Mensagem() {
    }
    Mensagem.alertName = function (firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        console.log(firstName + " " + restOfName.join(" "));
        //console.log(restOfName);
    };
    return Mensagem;
}());
Mensagem.alertName("Fulano", "de", "Tal");
