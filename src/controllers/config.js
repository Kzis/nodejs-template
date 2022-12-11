const services = require('../services/config'); 
const packJson = require('../../package.json');


exports.getConfig = (req, res) => {
    
    try {
        res = services.getConfig(req, res)
    } catch (error) {
        console.log(error)
    }

    return res
};

exports.getVersion = (req, res) => {
    
    try {
        res = services.getVersion(req, res)
    } catch (error) {
        console.log(error)
    }

    return res
};
