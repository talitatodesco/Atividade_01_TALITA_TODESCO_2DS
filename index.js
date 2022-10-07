const express = require('express');

const app = express();

console.log('teste de github')


app.post('/Cadastrardados', (req, res)=>{
    res.send('ROTA DE CADASTRO DE DADOS!!');
});


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
