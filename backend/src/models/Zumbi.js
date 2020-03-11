const mongoose = require('mongoose');
const Arma = require('./Arma')
const Armadura = require('./Armadura')


const ZumbiSchema = new mongoose.Schema({
    arma: {
        type: [String],
        required: true
    },
    armadura: {
        type: [String],
        required: true
    }
});

mongoose.model('Zumbi', ZumbiSchema);