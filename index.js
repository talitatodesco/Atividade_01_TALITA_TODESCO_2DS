const express = require('express');

const app = express();

//ROTA DE CADASTRO DE CATEGORIA
app.post('/Cadastrardados', (req, res)=>{
    res.send('ROTA DE CADASTRO DE DADOS!!');
});

//ROTA DE LEITURA DE CATEGORIA
app.get('/Listardados', (req, res)=>{
    res.send('ROTA DE LISTAGEM DE DADOS!!');
});

//ROTA DE ALTERAÇÃO DE CATEGORIA
app.put('/Alterardados', (req, res)=>{
    res.send('ROTA DE ALTERAÇÃO DE DADOS!!');
});

//ROTA DE EXLUSÃO DE CATEGORIA
app.delete('/Deletardados', (req, res)=>{
    res.send('ROTA DE DELETAR DADOS!!');
});


app.listen(3000, ()=>{
    console.log('Servidor Rodando!!')
})