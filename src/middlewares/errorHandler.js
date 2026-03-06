const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message);

    if (err.response) {
        return res.status(err.response.status).json({
            success: false,
            message: 'Error al conectar con TheCatAPI',
            detail: err.response.data,
        });
    }

    res.status(500).json({
        success: false,
        message: err.message || 'Error interno del servidor',
    });
};

module.exports = errorHandler;