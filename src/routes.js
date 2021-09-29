const express = require('express');
const connection = require('./database/connection');
const routes = express.Router();
const UserController = require('./controller/UserController');

routes.get('/users', UserController.list)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

module.exports = routes;

/***
 * GET: Buscar/listar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */
/**
 * Parâmetros
 * Query: parâmetros nomeados enviados na rota
 * Route params: parâmetros utilizados para identificar um recurso
 * Rquest body: corpo da requisição
 */


