const { Router } = require('express');
const catController = require('../controllers/catController');

const router = Router();

router.get('/random', catController.getGatosRandom);
router.get('/breeds', catController.getRazas);
router.get('/breed/:breedId', catController.getIdRazas);

module.exports = router;