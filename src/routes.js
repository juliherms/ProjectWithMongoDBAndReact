const { Router } = require('express');
const axios = require('axios'); //responsible to call other apis
const routes = Router();
const User = require('./models/User');

//default access
routes.post('/users', async (request, response) => {

    const { link,skills } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${link}`);

    const { name = login, avatar_url, bio} = apiResponse.data;

    const skillsArray = skills.split(',').map(skill => skill.trim());

    //short sintax
    const ret = await User.create({
       name,
       link,
       description : bio,
       avatar_url,
       skills: skillsArray

    });

    return response.json(ret);
});

module.exports = routes; //export routes

