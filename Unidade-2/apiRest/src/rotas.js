const express = require('express');

const {listarIntrutores, obterInstrutor, cadastrarInstrutores,atualizarinstrutor } = require('./controladores/instrutores');

const rotas = express();


rotas.get('/instrutores', listarIntrutores );

rotas.get('/instrutores/:id', obterInstrutor );

rotas.post('/instrutores', cadastrarInstrutores)

rotas.put('/instrutores/:id', atualizarinstrutor)

module.exports = rotas;