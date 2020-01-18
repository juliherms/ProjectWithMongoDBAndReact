const { Router } = require('express');
const UserController = require('./controllers/UserController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//default access
routes.get('/users', UserController.index);
routes.post('/users',UserController.save);
routes.get('/search',SearchController.index);

module.exports = routes; //export routes

