const request = require('supertest');
const app = require('../src/app');

describe('Pruebas de Integración para Task Manager API', () => {
    let createdTaskId = null;

    test('GET /api/v1/tasks - Debe obtener la lista inicial de tareas', async () => {
        const response = await request(app).get('/api/v1/tasks');
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    test('POST /api/v1/tasks - Debe crear una nueva tarea exitosamente', async () => {
        const newTaskData = {
            title: "Desarrollar pruebas unitarias",
            description: "Escribir test de integración con Jest y Supertest",
            priority: "HIGH",
            status: "IN_PROGRESS"
        };

        const response = await request(app)
            .post('/api/v1/tasks')
            .send(newTaskData);

        expect(response.statusCode).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.data.title).toBe(newTaskData.title);
        createdTaskId = response.body.data.id;
    });

    test('GET /api/v1/tasks/:id - Debe obtener la tarea recién creada', async () => {
        const response = await request(app).get(`/api/v1/tasks/${createdTaskId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.id).toBe(createdTaskId);
    });

    test('PUT /api/v1/tasks/:id - Debe actualizar el estado de la tarea', async () => {
        const response = await request(app)
            .put(`/api/v1/tasks/${createdTaskId}`)
            .send({ status: "COMPLETED" });

        expect(response.statusCode).toBe(200);
        expect(response.body.data.status).toBe("COMPLETED");
    });

    test('DELETE /api/v1/tasks/:id - Debe eliminar la tarea por ID', async () => {
        const response = await request(app).delete(`/api/v1/tasks/${createdTaskId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
    });

    test('GET /api/v1/tasks/:id - Debe retornar 404 para una tarea eliminada', async () => {
        const response = await request(app).get(`/api/v1/tasks/${createdTaskId}`);
        expect(response.statusCode).toBe(404);
        expect(response.body.success).toBe(false);
    });
});
