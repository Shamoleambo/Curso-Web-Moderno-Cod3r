const express = require('express');
const app = express();

app.get('/opa',(req, res)=>{
    //res.send('<h1>Oi Mano!</h1><br/><p>...nois</p>');

    // res.json({
    //     name: "caneta",
    //     price: 12.00,
    //     discount: 0.10
    // });

    // res.json([
    //     {id: 7, nome: 'Ana', posicao: 1},
    //     {id: 34, nome: 'Bia', posicao: 2},
    //     {id: 73, nome: 'Carlos', posicao: 3}
    // ]);

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
});

app.listen(3000, ()=> console.log("Backend executando..."));