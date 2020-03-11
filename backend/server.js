const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

// Iniciando o BD
// É necessario passar a url de conexão com o mongodb
// nodeapi: nome do schema a ser utilizado
mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ useNewUrlParser: true });
requireDir('./src/models')

app.use(express.json());

// Acesso a Arma, inserir novos dados
const Arma = mongoose.model('Arma');
const Armadura = mongoose.model('Armadura');
const Zumbi = mongoose.model('Zumbi');


// Rotas
// 'use' é como se fosse um coringa, aceita todo tipo de requisições
app.use('/api', require('./src/routes'))

app.listen(3003);