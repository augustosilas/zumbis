const express = require('express');
const routes = express.Router();

const ArmaController = require('./controllers/ArmaController');
const ArmaduraController = require('./controllers/ArmaduraController');
const ZumbiController = require('./controllers/ZumbiController')

routes.get('/armas', ArmaController.index);             // exibe todos elementos
routes.post('/armas', ArmaController.store);            // cria novos elementos
routes.put('/armas:id', ArmaController.update);         // atualiza um elemento existente através do id
routes.delete('/armas:id', ArmaController.destroy);     // exclui um elemento do DB através do id

routes.get('/armaduras', ArmaduraController.index);     // exibe todos elementos

routes.get('/zumbi', ZumbiController.index);            // exibe todos elementos

module.exports = routes;