const express = require('express');
const mongoose = require('mongoose');

// Iniciando o app
const app = express();

// Iniciando o BD
// É necessario passar a url de conexão com o mongodb
// nodeapi: nome do schema a ser utilizado
mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ useUnifiedTopology: true,
    useNewUrlParser: true });

// Primeira rota
app.get('/', (req, res) => {
    res.send('Olá Mundo')
});

app.listen(3003);