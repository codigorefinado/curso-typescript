"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProdutoDAOHTTPRest = (function () {
    function ProdutoDAOHTTPRest() {
    }
    ProdutoDAOHTTPRest.prototype.salvar = function (entidade) {
        console.log("L\u00F3gica para salvar o produto em HTTPRest");
    };
    ProdutoDAOHTTPRest.prototype.atualizar = function (entidade) {
        console.log("L\u00F3gica para ATUALIZAR o produto em HTTPRest");
    };
    ProdutoDAOHTTPRest.prototype.pesquisar = function (id) {
        console.log("L\u00F3gica para PESQUISAR o produto por id do HTTPRest");
    };
    return ProdutoDAOHTTPRest;
}());
exports.ProdutoDAOHTTPRest = ProdutoDAOHTTPRest;
