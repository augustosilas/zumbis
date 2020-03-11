const mongoose = require('mongoose');
const Arma = require('./Arma')
const Armadura = require('./Armadura')


const ZumbiSchema = new mongoose.Schema({
    arma: {
        type: [Arma],
        required: true
    },
    armadura: {
        type: [Armadura],
        required: true
    }
});