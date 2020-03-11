const express = require('express');

// Iniciando o app
const app = express();

// Iniciando o banco de dados


// Primeira rota
app.get('/', (req, res) => {
    res.send('Olá Mundo')
});

app.listen(3003);