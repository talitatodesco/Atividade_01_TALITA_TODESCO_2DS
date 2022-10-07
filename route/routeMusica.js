const express = require('express');

const modelmusica = require('../model/modelmusica');

const router = express.Router();


router.post('/Cadastrardados', (req, res)=>{
    res.send('ROTA DE CADASTRO DE DADOS!!');
});

router.get('/Listardados', (req, res)=>{
    res.send('ROTA DE LISTAGEM DE DADOS!!');
});

router.put('/Alterardados', (req, res)=>{
    res.send('ROTA DE ALTERAÇÃO DE DADOS!!');
});

router.delete('/Deletardados', (req, res)=>{
    res.send('ROTA DE DELETAR DADOS!! ');
});


module.exports = router;