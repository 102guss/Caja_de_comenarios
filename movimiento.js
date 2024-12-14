// Arreglo para almacenar tareas
let tasks = [];

// Función para añadir tarea
function addTask(title, description) {
    const task = {
        id: Date.now(), // Id único para cada tarea
        title,
        description
    };
    tasks.push(task);
    renderTask();
}

// Función para renderizar las tareas en HTML
function renderTask() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Limpia la lista de tareas

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.className = "list-group-item d-flex justify-content-between align-items-center task-item";

        listItem.innerHTML = `
            <div>
                <h5>${task.title}</h5>
                <p class="mb-1">${task.description}</p>
            </div>
            <button class="btn delete-task btn-sm" data-id="${task.id}">Eliminar</button>
        `;

        taskList.appendChild(listItem);
    });

    // Añadir eventos para los botones "Eliminar"
    document.querySelectorAll('.delete-task').forEach(button => {
        button.addEventListener('click', function () {
            const taskId = parseInt(this.getAttribute('data-id'));
            deleteTask(taskId);
        });
    });
}

// Función para eliminar una tarea
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id); // Filtrar las tareas para eliminar la que coincide con el id
    renderTask(); // Volver a renderizar la lista
}

// Manejar el formulario
document.getElementById("taskForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;

    addTask(title, description);

    event.target.reset(); // Limpiar el formulario después de enviar
});
