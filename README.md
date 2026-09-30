# 🚀 Task Manager API RESTful

![Node.js](https://img.shields.io/badge/Node.js-v24.18.0-green?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-v4.19.2-black?style=for-the-badge&logo=express)
![Swagger](https://img.shields.io/badge/Swagger-OpenAPI_3.0-85EA2D?style=for-the-badge&logo=swagger)
![Jest](https://img.shields.io/badge/Jest-Passing-brightgreen?style=for-the-badge&logo=jest)

API RESTful modular desarrollada en **Node.js** y **Express** para la gestión de tareas, aplicando **Clean Architecture** (separación en capas de controladores, servicios y repositorios), validación de peticiones, manejo centralizado de errores y documentación interactiva con **Swagger UI**.

---

## 🛠️ Arquitectura del Proyecto

El proyecto está organizado bajo la arquitectura en capas para garantizar mantenibilidad, escalabilidad y separación de responsabilidades:

```text
task-manager-api/
├── src/
│   ├── config/          # Configuraciones de la aplicación
│   ├── controllers/     # Controladores HTTP (manejo de req y res)
│   ├── services/        # Capa de servicio (reglas de negocio y validaciones)
│   ├── repositories/    # Capa de repositorio (acceso y persistencia de datos)
│   ├── middlewares/     # Middlewares para manejo centralizado de errores
│   ├── routes/          # Enrutamiento de endpoints REST v1
│   ├── swagger.yaml     # Especificación OpenAPI 3.0 para la documentación
│   ├── app.js           # Configuración de Express y middlewares globales
│   └── server.js        # Punto de entrada para iniciar el servidor HTTP
├── tests/
│   └── task.test.js     # Pruebas de integración automatizadas con Jest y Supertest
├── package.json
├── .gitignore
└── README.md
```

---

## 📋 Endpoints de la API

### Base URL: `http://localhost:3000/api/v1`

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/tasks` | Obtener todas las tareas (filtro opcional `?status=PENDING`) |
| `GET` | `/tasks/:id` | Obtener el detalle de una tarea por su ID |
| `POST` | `/tasks` | Crear una nueva tarea (`title`, `description`, `status`, `priority`) |
| `PUT` | `/tasks/:id` | Actualizar los datos de una tarea existente |
| `DELETE` | `/tasks/:id` | Eliminar una tarea por su ID |

---

## 📑 Documentación Interactiva (Swagger UI)

Una vez iniciado el servidor, puedes acceder a la interfaz de **Swagger UI** para probar todos los endpoints interactivamente desde el navegador:

👉 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

---

## 🚀 Instalación y Ejecución Local

### 1. Clonar e instalar dependencias
```bash
git clone https://github.com/Gabmon24/task-manager-api.git
cd task-manager-api
npm install
```

### 2. Iniciar el servidor de desarrollo
```bash
npm run dev
# o para producción:
npm start
```

---

## 🧪 Pruebas de Integración

Ejecutar la suite de pruebas unitarias y de integración con **Jest** y **Supertest**:

```bash
npm test
```

---

## 👤 Autor

Desarrollado por **Gabriel Montiel** (`Gabmon24`)
- **LinkedIn:** [Gabriel Montiel](https://www.linkedin.com/in/gabriel-montiel-5239801a9)
- **GitHub:** [@Gabmon24](https://github.com/Gabmon24)
- **Formación:** Licenciado en Informática & Tecnólogo ADSO en el SENA.

---

## 📜 Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
