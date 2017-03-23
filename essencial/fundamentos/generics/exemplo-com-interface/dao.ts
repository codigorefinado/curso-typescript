export interface DAO<T> {
  salvar(entidade: T);

  atualizar(entidade: T);

  pesquisar(id: number);
}



