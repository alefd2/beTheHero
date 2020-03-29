const express = require('express');

const OngController = require('./controllers/OngController')
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionControler = require('./controllers/sessionControler')

const routes = express.Router();

routes.post('/session' , sessionControler.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;