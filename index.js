const express = require('express');
const routerMusica = require('./route/routeMusica');

const app = express();

console.log('teste de github')

app.use ('/', routerMusica);




app.listen(3000, ()=>{
    console.log('Servidor Rodando!!')
})