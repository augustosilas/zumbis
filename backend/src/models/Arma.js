const mongoose = require('mongoose');

const ArmaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    calibri: {
        type: Number,
        required: true
    },
    dano: {
        type: Number,
        required: true
    }
});

// Código utilizado para registrar o código da aplicação
// Toda aplicação sabe que existe uma model Arma
mongoose.model('Arma', ArmaSchema);