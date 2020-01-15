//import module express
const express = require('express');
//import module integration with mongo
const mongoose = require('mongoose');
const routes = require('./routes'); //import routes

const app = express();

mongoose.connect('mongodb+srv://wsuser:1234ws@cluster0-zacxn.mongodb.net/radar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); //allow json for my routes
app.use(routes); //allow routes

app.listen(8090); //port