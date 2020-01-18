const User = require('../models/User');
const axios = require('axios'); //responsible to call other apis
const parserStringAsArray = require('../utils/parseStringAsArray');

module.exports = { 

    //responsible to list users
    async index(request,response){
        const users = await User.find();

        return response.json(users);
    },

    //responsible to save user
    async save(request, response)  {

    const { link,skills,latitude,longitude } = request.body;

    //check user exists
    let user = await User.findOne({ link });

    
    if(!user){

        console.log('não existe');

        const apiResponse = await axios.get(`https://api.github.com/users/${link}`);
        const { name = login, avatar_url, bio} = apiResponse.data;

        const skillsArray = parserStringAsArray(skills);

        const location = {
            type: 'Point',
            coordinates: [longitude,latitude],
        };

        //short sintax
        const ret = await User.create({
        name,
        link,
        description : bio,
        avatar_url,
        skills: skillsArray,
        location
        })
    }
    return response.json(ret);
  },
  //TODO
  async update(){

  },
  //TODO
  async destroy() {

  },
};