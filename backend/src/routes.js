const express = require('express');
const routes = express.Router();

const ArmaController = require('./controllers/ArmaController');
const ArmaduraController = require('./controllers/ArmaduraController');
const ZumbiController = require('./controllers/ZumbiController')

routes.get('/armas', ArmaController.index);                  // exibe todos elementos
routes.post('/armas', ArmaController.store);                 // cria novos elementos
routes.put('/armas/:id', ArmaController.update);             // atualiza um elemento existente através do id
routes.delete('/armas/:id', ArmaController.destroy);         // exclui um elemento do DB através do id

routes.get('/armaduras', ArmaduraController.index);          // exibe todos elementos
routes.post('/armaduras', ArmaduraController.store);         // cria novos elementos
routes.put('/armaduras/:id', ArmaduraController.update);     // atualiza um elemento existente através do id
routes.delete('/armaduras/:id', ArmaduraController.destroy)  // exclui um elemento do DB através do id

routes.get('/zumbi', ZumbiController.index);                 // exibe todos elementos
routes.post('/zumbi', ZumbiController.store);                // cria novos elementos
routes.put('/zumbi/:id', ZumbiController.update);            // atualiza um elemento existente através do id
routes.delete('zumbi/:id', ZumbiController.destroy);         // exclui um elemento do DB através do id

module.exports = routes;