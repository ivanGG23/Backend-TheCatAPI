require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    CAT_API_KEY: process.env.THECAT_API_KEY,
    CAT_API_BASE_URL: process.env.THECAT_API_BASE_URL,
};