import { Produto } from './produto';
import { ProdutoDAOXML } from './produto-xml';
import { DAO } from './dao';

let dao: DAO<Produto> = new ProdutoDAOXML();
dao.pesquisar(1);


