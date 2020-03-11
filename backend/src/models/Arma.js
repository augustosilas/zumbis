const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


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

ArmaSchema.plugin(mongoosePaginate);

// Código utilizado para registrar o código da aplicação
// Toda aplicação sabe que existe uma model Arma
mongoose.model('Arma', ArmaSchema);