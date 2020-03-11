const mongoose = require('mongoose');

// Importando model 'Zumbi'
const Zumbi = mongoose.model('Zumbi');

module.exports = {
    async index(req, res) {
        let zumbi = await Zumbi.find();

        return res.json(zumbi);
    },

    async store(req, res) {
        let zumbi = await Zumbi.create(req.body);

        return res.json(zumbi);
    }
}

