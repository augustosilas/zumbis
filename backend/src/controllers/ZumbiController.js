const mongoose = require('mongoose');

// Importando model 'Zumbi'
const Zumbi = mongoose.model('Zumbi');
const Arma = mongoose.model('Arma');
const Armadura = mongoose.model('Armadura');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        console.log(req);
        // Primeiro parâmetro: query, condições de filtro
        // Segundo parâmetro: página atual e limite de elementos
        let zumbi = await Zumbi.paginate({}, {page, limit: 10});

        return res.json(zumbi);
    },

    async store(req, res) {
        let { arma, armadura } = req.body;

        let nome = arma;
        let zumbiArma = await Arma.findOne({ nome });
                
        nome = armadura;
        let zumbiArmadura = await Armadura.findOne({ nome });
        
        if(zumbiArma != null && zumbiArmadura != null) {
            const zumbi = await Zumbi.create(req.body);      
            return res.json(res.json(zumbi));
        }

        return res.send("Impossivel criar zumbi!!!");
    },

    async update(req, res) {
        // {new: true} força o método retornar o valor atualizado para a variavel 'zumbi'
        let zumbi = await Zumbi.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(zumbi);
    },

    async destroy(req, res) {
        await Zumbi.findByIdAndRemove(req.params.id);

        return res.send();
    }
}

