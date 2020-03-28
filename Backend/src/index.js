const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Método HTTP:
  * 
  * Get: Buscar uma informaçãp do Back-end
  * Post: Criar uma informação no Back-end
  * Put: Alterar uma informação no Back-end
  * Delete: Deletar uma informação no Back-end
  */

 /**
  * Tipos de parâmetros:
  * Query: parâmetros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Params: Parâmetros para identificar recursos
  * Request Body: Corpo da requisição usado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table ('users').select('*').where()
    */



app.listen(3333);

