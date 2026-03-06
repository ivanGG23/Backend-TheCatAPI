const catService = require('../services/catService');

const getGatosRandom = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const cats = await catService.getGatosRandom(limit);
        res.json({
            success: true,
            data: cats,
        });
    } catch (error) {
        next(error);
    }
};

const getRazas = async (req, res, next) => {
    try {
        const breeds = await catService.getRazas();
        res.json({
            success: true,
            data: breeds,
        });
    } catch (error) {
        next(error);
    }
};

const getIdRazas = async (req, res, next) => {
    try {
        const { breedId } = req.params;
        const limit = parseInt(req.query.limit) || 10;
        const cats = await catService.getIdRazas(breedId, limit);
        res.json({
            success: true,
            data: cats,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getGatosRandom,
    getRazas,
    getIdRazas,
};