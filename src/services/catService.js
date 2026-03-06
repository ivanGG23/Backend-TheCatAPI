const axios = require('axios')
const { THECAT_API_KEY, THECAT_API_BASE_URL } = require('../config/env')

const clienteGato = axios.create({
    baseURL: THECAT_API_BASE_URL,
    headers: {
        'x-api-key': THECAT_API_KEY,
    },
});

const getGatosRandom = async (limit = 10) => {
    const response = await clienteGato.get('/images/search', {
        params: { limit },
    });
    return response.data;
};

const getRazas = async () => {
    const response = await clienteGato.get('/breeds');
    return response.data;
};

const getIdRazas = async (breedId, limit = 10) => {
    const response = await clienteGato.get('/images/search', {
        params: {
            breed_ids: breedId,
            limit,
        },
    });
    return response.data;
};

module.exports = {
    getGatosRandom,
    getRazas,
    getIdRazas,
};