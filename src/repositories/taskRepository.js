// Capa de Repositorio: Gestiona la persistencia de datos

class TaskRepository {
    constructor() {
        this.tasks = [
            {
                id: "1",
                title: "Diseñar modelo de base de datos",
                description: "Crear diagrama ER para el sistema de citas médicas",
                status: "PENDING",
                priority: "HIGH",
                createdAt: new Date().toISOString()
            },
            {
                id: "2",
                title: "Configurar repositorio de GitHub",
                description: "Subir proyectos personales y configurar perfil profesional",
                status: "COMPLETED",
                priority: "MEDIUM",
                createdAt: new Date().toISOString()
            }
        ];
        this.nextId = 3;
    }

    async findAll(filterStatus = null) {
        if (filterStatus) {
            return this.tasks.filter(t => t.status.toUpperCase() === filterStatus.toUpperCase());
        }
        return [...this.tasks];
    }

    async findById(id) {
        return this.tasks.find(t => t.id === id) || null;
    }

    async create(taskData) {
        const newTask = {
            id: String(this.nextId++),
            title: taskData.title,
            description: taskData.description || "",
            status: taskData.status || "PENDING",
            priority: taskData.priority || "MEDIUM",
            createdAt: new Date().toISOString()
        };
        this.tasks.push(newTask);
        return newTask;
    }

    async update(id, updateData) {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index === -1) return null;

        const currentTask = this.tasks[index];
        const updatedTask = {
            ...currentTask,
            ...updateData,
            id: currentTask.id, // ID no modificable
            updatedAt: new Date().toISOString()
        };

        this.tasks[index] = updatedTask;
        return updatedTask;
    }

    async delete(id) {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index === -1) return false;

        this.tasks.splice(index, 1);
        return true;
    }
}

module.exports = new TaskRepository();
