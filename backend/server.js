const express = require('express');
const mysql = require('mysql');

// Iniciando o app
const app = express();

// Iniciando o banco de dados

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "root",
    database: "BancoZumbi"
});

connection.connect((err) => {
    if(!err) {
        console.log('Connected!');
    } else {
        console.log('Connected Falied!');
    }

})

// Primeira rota
app.get('/', (req, res) => {
    res.send('Olá Mundo')
});

app.listen(3003);