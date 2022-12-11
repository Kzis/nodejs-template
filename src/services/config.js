const packJson = require('../../package.json');

exports.getConfig = (req, res) => {
    console.log("Services")
    try {
        res = res.status(200).json({
            packJson 
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'error': error});
    }

    return res
};

exports.getVersion = (req, res) => {
    console.log("Services")
    try {
        res = res.status(200).json({ 
                'POC Backend': packJson.version
            });
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'error': error});
    }

    return res
};