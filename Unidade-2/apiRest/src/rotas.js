const express = require('express');

const {listarIntrutores, obterInstrutor, cadastrarInstrutores } = require('./controladores/instrutores');

const rotas = express();


rotas.get('/instrutores', listarIntrutores );

rotas.get('/instrutores/:id', obterInstrutor );

rotas.post('/instrutores', cadastrarInstrutores)


module.exports = rotas;