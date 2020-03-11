const mongoose = require('mongoose');

// Importando model 'Zumbi'
const Zumbi = mongoose.model('Zumbi');

module.exports = {
    async index(req, res) {
        let zumbi = await Zumbi.find();

        return res.json(zumbi);
    }
}

