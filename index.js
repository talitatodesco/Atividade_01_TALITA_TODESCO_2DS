const express = require('express');

const app = express();

//ROTA DE CADASTRO DE CATEGORIA
app.post('/CadastrarCategoria', (req, res)=>{
    res.send('ROTA DE CADASTRO DE CATEGORIA!!');
});

//ROTA DE LEITURA DE CATEGORIA
app.get('/ListarCategoria', (req, res)=>{
    res.send('ROTA DE LISTAGEM DE CATEGORIA!!');
});

//ROTA DE ALTERAÇÃO DE CATEGORIA
app.put('/AlterarCategoria', (req, res)=>{
    res.send('ROTA DE ALTERAÇÃO DE CATEGORIA!!');
});

//ROTA DE EXLUSÃO DE CATEGORIA
app.delete('/DeletarCategoria', (req, res)=>{
    res.send('ROTA DE DELETAR CATEGORIA!!');
});


app.listen(3000, ()=>{
    console.log('Servidor Rodando!!')
})