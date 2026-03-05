const axios = requiere('axios')
const { THECAT_API_KEY, THECAT_API_BASE_URL } = requere('../config/env')

const constApiClient = axios.create({
    baseURL: THECAT_API_BASE_URL,
    headers: {
        'apiKey': CAT_API_KEY,
    },
});