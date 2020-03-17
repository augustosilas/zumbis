const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

// Permitindo que envie dados para aplicação no formato de json
app.use(express.json());
app.use(cors());

// Iniciando o BD
// É necessario passar a url de conexão com o mongodb
// nodeapi: nome do schema a ser utilizado
mongoose.connect('mongodb://localhost:27018/nodeapi', 
{ useNewUrlParser: true });
requireDir('./src/models')

const Arma = mongoose.model('Arma');            // Acesso a Arma: inserir, editar e deletar
const Armadura = mongoose.model('Armadura');    // Acesso a Armadura: inserir, editar e deletar
const Zumbi = mongoose.model('Zumbi');          // Acesso a Zumbi: inserir, editar e deletar


// Rotas
// 'use' é um coringa, aceita todo tipo de requisições
app.use('/api', require('./src/routes'))

app.listen(3003);