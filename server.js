const app = require('./src/app');
const { PORT } = require('./src/config/env');

app.listen(PORT, () => {
    console.log(`Server corriendo en http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
});