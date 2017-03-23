import { DAO } from './dao';

export class ProdutoDAOHTTPRest<Produto> implements DAO<Produto> {
  salvar(entidade: Produto) {
    console.log(`Lógica para salvar o produto em HTTPRest`);
  }

  atualizar(entidade: Produto) {
    console.log(`Lógica para ATUALIZAR o produto em HTTPRest`);
  }

  pesquisar(id: number) {
    console.log(`Lógica para PESQUISAR o produto por id do HTTPRest`);
  }
}