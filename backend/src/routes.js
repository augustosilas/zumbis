const express = require('express');
const routes = express.Router();

const ArmaController = require('./controllers/ArmaController');
const ArmaduraController = require('./controllers/ArmaduraController');
const ZumbiController = require('./controllers/ZumbiController')

routes.get('/armas', ArmaController.index);
routes.get('/armaduras', ArmaduraController.index);
routes.get('/zumbi', ZumbiController.index);

module.exports = routes;