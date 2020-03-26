const express = require('express');
const cors = require("cors")
const routes = require('./routes')
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Tipos de paraÂmetros
 * 
 * Query params: parâmetros nomeados enviados na rota através do "?" (filtros, paginação)
 * Route params: parametros para identificar recursos
 * Request Body: corpo da requisição utilizado para criar ou alterar recursos
 */


app.listen(3333);


