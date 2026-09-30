// Punto de entrada del servidor HTTP
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en: http://localhost:${PORT}`);
    console.log(`📑 Documentación Swagger disponible en: http://localhost:${PORT}/api-docs`);
});
