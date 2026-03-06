require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 4000,
    THECAT_API_KEY: process.env.THECAT_API_KEY,
    THECAT_API_BASE_URL: process.env.THECAT_API_BASE_URL,
};