const mongoose = require('mongoose');

// Importando model 'Arma'
const Arma = mongoose.model('Arma');

module.exports = {
    // Mostra todos elementos
    async index(req, res) {
        let armas = await Arma.find();

        return res.json(armas);
    },

    // Cria novos elementos
    async store(req, res) {
        // req possui todos os dados da requisição
        // body é um desses dados
        // req.body possui todos dados necessarios
        let arma = await Arma.create(req.body);

        return res.json(arma);
    }
};