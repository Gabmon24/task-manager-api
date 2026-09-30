// Middleware global para el manejo centralizado de errores

function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Error interno del servidor";

    res.status(statusCode).json({
        success: false,
        error: {
            statusCode,
            message
        }
    });
}

module.exports = errorHandler;
