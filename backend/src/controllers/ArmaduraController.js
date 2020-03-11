const mongoose = require('mongoose');

// Importando model 'Armadura'
const Armadura = mongoose.model('Armadura');

module.exports = {
    // Função que mostra todos elementos
    async index(req, res) {
        let armaduras = await Armadura.find();

        return res.json(armaduras);
    }
};