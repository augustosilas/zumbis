const mongoose = require('mongoose');

// Importando model 'Arma'
const Arma = mongoose.model('Arma');

module.exports = {
    // Função que mostra todos elementos
    async index(req, res) {
        let armas = await Arma.find();

        return res.json(armas);
    }
};