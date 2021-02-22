const express = require('express');
const app = express();

const saudacao = require('./saudacaoMid');

app.use(saudacao("Mano"));

app.use((req, res, next)=>{
    console.log('Antes...');
    next();
});

app.get('/opa',(req, res, next)=>{
    
    res.json({
        data: [
            {id:1, nome: "Mano", idade: 26},
            {id:2, nome: "Truta", idade: 27},
            {id:3, nome: "Tiu", idade: 25}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    });

    next();
});

app.use((req, res, next)=>{
    console.log('...depois.');
    next();
});

app.listen(3000, ()=> console.log("Backend executando..."));