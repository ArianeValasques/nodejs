const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');
const routes = express.Router();

routes.get('/users', async(req, res)=>{
    const users = await connection('users').select('*');
    res.json(users);
})

routes.post('/users', async(req, res)=>{
    const {name, email, idade, empresa} = req.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('users').insert({
        id,
        name,
        email,
        idade,
        empresa
    })
    res.json({id})
})

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


