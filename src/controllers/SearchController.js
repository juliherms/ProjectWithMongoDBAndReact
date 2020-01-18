const User = require('../models/User');
const parserStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    //responsible to search people
    async index(request,response){

        console.log(request.query);
        //search all peoples with 10KM around.

        const { latitude,longitude, skills} = request.query;
        const skillsArray = parserStringAsArray(skills);

        //find users
        const users = await User.find({
            skills: {
                $in: skillsArray,
            },
            location: {
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude,latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({ users });

    }
}