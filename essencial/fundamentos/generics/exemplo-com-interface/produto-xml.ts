import { DAO } from './dao';

export class ProdutoDAOXML<Produto> implements DAO<Produto> {
  salvar(entidade: Produto) {
    console.log(`Lógica para ${entidade} salvar o produto em XML`);
  }

  atualizar(entidade: Produto) {
    console.log(`Lógica para ATUALIZAR o produto em XML`);
  }

  pesquisar(id: number) {
    console.log(`Lógica para PESQUISAR o produto por id do XML`);
  }
}
