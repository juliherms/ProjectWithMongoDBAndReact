const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

//default access
routes.post('/users',UserController.save);


module.exports = routes; //export routes

