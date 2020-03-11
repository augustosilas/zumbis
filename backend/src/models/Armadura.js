const mongoose = require('mongoose');

const ArmaduraSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    absorcao: {
        type: Number,
        required: true
    }
});

mongoose.model('Armadura', ArmaduraSchema);