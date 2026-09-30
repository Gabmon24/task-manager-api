// Configuración principal de la aplicación Express
const express = require('express');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Documentación de la API con Swagger UI
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas de la API v1
app.use('/api/v1/tasks', taskRoutes);

// Ruta base de bienvenida
app.get('/', (req, res) => {
    res.json({
        message: "Bienvenido a Task Manager API RESTful v1",
        documentation: "/api-docs",
        endpoints: "/api/v1/tasks"
    });
});

// Middleware de errores
app.use(errorHandler);

module.exports = app;
