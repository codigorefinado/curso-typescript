var Casa = (function () {
    function Casa(morador) {
        this.morador = morador;
    }
    Casa.prototype.quemMora = function () {
        console.log(this.morador);
    };
    return Casa;
}());
var Pai = (function () {
    function Pai() {
        this.nome = 'Clayton';
    }
    return Pai;
}());
var Filha = (function () {
    function Filha() {
        this.name = 'Catherine';
    }
    return Filha;
}());
var casa = new Casa(new Pai());
casa.quemMora();
//casa = new Casa(new Filha());
