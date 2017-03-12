var Fator;
(function (Fator) {
    Fator[Fator["Dobra"] = 2] = "Dobra";
    Fator[Fator["Triplica"] = 3] = "Triplica";
    Fator[Fator["Quaduplica"] = 4] = "Quaduplica";
})(Fator || (Fator = {}));
console.log(2 * Fator.Dobra);
