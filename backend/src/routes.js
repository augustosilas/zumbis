const express = require('express');
const routes = express.Router();

const ArmaController = require('./controllers/ArmaController');
const ArmaduraController = require('./controllers/ArmaduraController');
const ZumbiController = require('./controllers/ZumbiController')

routes.get('/armas', ArmaController.index);             // exibe todos elementos
routes.post('/armas', ArmaController.store);            // cria novos elementos

routes.get('/armaduras', ArmaduraController.index);     // exibe todos elementos

routes.get('/zumbi', ZumbiController.index);            // exibe todos elementos

module.exports = routes;