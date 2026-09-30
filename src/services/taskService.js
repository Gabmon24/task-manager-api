// Capa de Servicio: Contiene la lógica de negocio y validaciones
const taskRepository = require('../repositories/taskRepository');

const VALID_STATUSES = ['PENDING', 'IN_PROGRESS', 'COMPLETED'];
const VALID_PRIORITIES = ['LOW', 'MEDIUM', 'HIGH'];

class TaskService {
    async getAllTasks(status) {
        if (status && !VALID_STATUSES.includes(status.toUpperCase())) {
            throw new Error(`Estado inválido. Opciones válidas: ${VALID_STATUSES.join(', ')}`);
        }
        return await taskRepository.findAll(status);
    }

    async getTaskById(id) {
        const task = await taskRepository.findById(id);
        if (!task) {
            const error = new Error(`Tarea con ID ${id} no encontrada`);
            error.statusCode = 404;
            throw error;
        }
        return task;
    }

    async createTask(data) {
        if (!data.title || data.title.trim() === "") {
            const error = new Error("El título de la tarea es obligatorio");
            error.statusCode = 400;
            throw error;
        }

        if (data.status && !VALID_STATUSES.includes(data.status.toUpperCase())) {
            const error = new Error(`Estado inválido: ${data.status}`);
            error.statusCode = 400;
            throw error;
        }

        if (data.priority && !VALID_PRIORITIES.includes(data.priority.toUpperCase())) {
            const error = new Error(`Prioridad inválida: ${data.priority}`);
            error.statusCode = 400;
            throw error;
        }

        return await taskRepository.create({
            title: data.title.trim(),
            description: data.description ? data.description.trim() : "",
            status: data.status ? data.status.toUpperCase() : "PENDING",
            priority: data.priority ? data.priority.toUpperCase() : "MEDIUM"
        });
    }

    async updateTask(id, data) {
        await this.getTaskById(id); // Verifica existencia

        if (data.status && !VALID_STATUSES.includes(data.status.toUpperCase())) {
            const error = new Error(`Estado inválido: ${data.status}`);
            error.statusCode = 400;
            throw error;
        }

        if (data.priority && !VALID_PRIORITIES.includes(data.priority.toUpperCase())) {
            const error = new Error(`Prioridad inválida: ${data.priority}`);
            error.statusCode = 400;
            throw error;
        }

        const updatePayload = {};
        if (data.title !== undefined) updatePayload.title = data.title.trim();
        if (data.description !== undefined) updatePayload.description = data.description.trim();
        if (data.status !== undefined) updatePayload.status = data.status.toUpperCase();
        if (data.priority !== undefined) updatePayload.priority = data.priority.toUpperCase();

        return await taskRepository.update(id, updatePayload);
    }

    async deleteTask(id) {
        await this.getTaskById(id); // Verifica existencia
        return await taskRepository.delete(id);
    }
}

module.exports = new TaskService();
