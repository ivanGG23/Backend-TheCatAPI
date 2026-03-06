const express = require('express');
const cors = require('cors');
const catRoutes = require('./routes/catRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:5500', 'https://frontendthecatapi.vercel.app/']
}));

app.use(express.json());

app.use('/cats', catRoutes);

app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server corriendo' });
});

app.use(errorHandler);

module.exports = app;