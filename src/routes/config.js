const controller = require('../controllers/config'); 
const router = require('express').Router();

router.get('/pjson', controller.getConfig);
router.get('/version', controller.getVersion);

module.exports = router;