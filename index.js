
const express = require('express');
const connection = require('./database/database');
const routerMusica = require('./route/routeMusica');


const app = express();

app.use(express.json());


app.use ('/', routerMusica);


app.listen(3000, ()=>{
    console.log('Servidor Rodando!!')
});