const express = require("express");

const app = express();
app.use(express.json());

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

app.get('/users',(req, res)=>{
    //res.send("Hello World")
    const params = req.query;
    console.log(params)
    res.json(params)
})

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

app.post('/users/:id',(req, res)=>{
    const params = req.params;
    console.log(params)
    res.json(params)
})

app.post('/users/',(req, res)=>{
    const params = req.body;
    console.log(params)
    res.json(params)
})


//app.put('/users',(req, res)=>{
//    res.json({
//        nome: 'Lucas',
//        empresa: 'UESB'
//    })
//})

app.listen(3001);

