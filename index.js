
const express = require('express');
<<<<<<< HEAD
const connection = require('./database/database');
const routerMusica = require('./route/routeMusica');
=======
>>>>>>> da67f28631f45040945de9a96b9eafa24ae34f2f


const app = express();

app.use(express.json());



app.post('/Cadastrardados', (req, res)=>{
    res.send('ROTA DE CADASTRO DE DADOS!!');
});


<<<<<<< HEAD
app.listen(3000, ()=>{
    console.log('Servidor Rodando!!')
});
=======
app.get('/Listardados', (req, res)=>{
    res.send('ROTA DE LISTAGEM DE DADOS!!');
});


app.put('/Alterardados', (req, res)=>{
    res.send('ROTA DE ALTERAÇÃO DE DADOS!!');
});


app.delete('/Deletardados', (req, res)=>{
    res.send('ROTA DE DELETAR DADOS!!');
});


app.listen(3000, ()=>{
    console.log('Servidor Rodando!!')
})
>>>>>>> da67f28631f45040945de9a96b9eafa24ae34f2f
