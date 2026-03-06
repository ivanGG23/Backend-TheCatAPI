const express = require('express');
const cors = require('cors');
const catRoutes = require('./routes/catRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors({
    origin: [
    "*"
]
}));

app.use(express.json());

app.use('/api/cats', catRoutes);

app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server corriendo' });
});

app.use(errorHandler);

module.exports = app;