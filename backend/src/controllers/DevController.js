const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
//  O controleer geralmente tem 5 funções:
//  index
//  show
//  store
//  update
//  destroy
module.exports = {
    async index(request, response){
        const devs = await Dev.find(); //dentro dos parenteses pode ser colocado os filtros

        return response.json(devs);
    },
    async store(request, response) {
        const {github_username, techs, latitude, longitude} = request.body;

        let dev = await Dev.findOne({github_username});
         
        if (!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const {name = login, avatar_url, bio} = apiResponse.data;
            const techsArray = parseStringAsArray(techs);
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                name,
                github_username,
                bio,
                avatar_url,
                techs: techsArray,
                location,
            })
        }

        return response.json(dev);
    }
};