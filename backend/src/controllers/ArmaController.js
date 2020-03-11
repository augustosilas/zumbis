const mongoose = require('mongoose');

// Importando model 'Arma'
const Arma = mongoose.model('Arma');

module.exports = {
    // Mostra todos elementos
    async index(req, res) {
        let { page = 1 } = req.query;

        let armas = await Arma.paginate({}, {page, limit: 10});

        return res.json(armas);
    },

    // Cria novos elementos
    async store(req, res) {
        // req possui todos os dados da requisição
        // body é um desses dados
        // req.body possui todos dados necessarios
        let arma = await Arma.create(req.body);

        return res.json(arma);
    },

    // Atualiza um elemento existente através do id
    async update(req, res) {
        let arma = await Arma.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(arma);
    },

    // Exclui um elemento existente através do id
    async destroy(req, res) {
        await Arma.findByIdAndRemove(req.params.id);

        return res.send();
    }
};