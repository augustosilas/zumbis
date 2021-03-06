const mongoose = require("mongoose");

// Importando model 'Armadura'
const Armadura = mongoose.model("Armadura");

module.exports = {
  // Função que mostra todos elementos
  async index(req, res) {
    let { page = 1 } = req.query;

    let armaduras = await Armadura.paginate({}, { page, limit: 5 });

    return res.json(armaduras);
  },

  // Cria novos elementos
  async store(req, res) {
    let armadura = await Armadura.create(req.body);

    return res.json(armadura);
  },

  // Atualiza um elemento existente através do id
  async update(req, res) {
    let armadura = await Armadura.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(armadura);
  },

  // Exclui um elemento existente através do id
  async destroy(req, res) {
    await Armadura.findByIdAndRemove(req.params.id);

    return res.send();
  }
};
