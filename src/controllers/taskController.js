// Capa de Controlador: Maneja solicitudes y respuestas HTTP
const taskService = require('../services/taskService');

class TaskController {
    async getTasks(req, res, next) {
        try {
            const { status } = req.query;
            const tasks = await taskService.getAllTasks(status);
            res.status(200).json({
                success: true,
                count: tasks.length,
                data: tasks
            });
        } catch (error) {
            next(error);
        }
    }

    async getTaskById(req, res, next) {
        try {
            const { id } = req.params;
            const task = await taskService.getTaskById(id);
            res.status(200).json({
                success: true,
                data: task
            });
        } catch (error) {
            next(error);
        }
    }

    async createTask(req, res, next) {
        try {
            const newTask = await taskService.createTask(req.body);
            res.status(201).json({
                success: true,
                message: "Tarea creada exitosamente",
                data: newTask
            });
        } catch (error) {
            next(error);
        }
    }

    async updateTask(req, res, next) {
        try {
            const { id } = req.params;
            const updatedTask = await taskService.updateTask(id, req.body);
            res.status(200).json({
                success: true,
                message: "Tarea actualizada exitosamente",
                data: updatedTask
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteTask(req, res, next) {
        try {
            const { id } = req.params;
            await taskService.deleteTask(id);
            res.status(200).json({
                success: true,
                message: `Tarea con ID ${id} eliminada exitosamente`
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new TaskController();
