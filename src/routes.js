const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

//default access
routes.get('/users', UserController.index);
routes.post('/users',UserController.save);


module.exports = routes; //export routes

