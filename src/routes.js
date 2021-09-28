const express = require('express');
const routes = express.Router();

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

 routes.get('/users',(req, res)=>{
    //res.send("Hello World")
    const params = req.query;
    console.log(params)
    res.json(params)
})

routes.post('/users/:id',(req, res)=>{
    const params = req.params;
    console.log(params)
    res.json(params)
})

routes.post('/users/',(req, res)=>{
    const params = req.body;
    console.log(params)
    res.json(params)
})

module.exports = routes;

//app.get('/users',(req, res)=>{
    //res.send("Hello World")
//    const params = req.query;
//    console.log(params)
//    res.json({
//        nome: 'Lucas',
//        empresa: 'UESB'
//    }
//    )
//})

//app.put('/users',(req, res)=>{
//    res.json({
//        nome: 'Lucas',
//        empresa: 'UESB'
//    })
//})