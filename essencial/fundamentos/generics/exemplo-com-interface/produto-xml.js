"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProdutoDAOXML = (function () {
    function ProdutoDAOXML() {
    }
    ProdutoDAOXML.prototype.salvar = function (entidade) {
        console.log("L\u00F3gica para " + entidade + " salvar o produto em XML");
    };
    ProdutoDAOXML.prototype.atualizar = function (entidade) {
        console.log("L\u00F3gica para ATUALIZAR o produto em XML");
    };
    ProdutoDAOXML.prototype.pesquisar = function (id) {
        console.log("L\u00F3gica para PESQUISAR o produto por id do XML");
    };
    return ProdutoDAOXML;
}());
exports.ProdutoDAOXML = ProdutoDAOXML;
