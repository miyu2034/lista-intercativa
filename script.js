// script.js
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Agregar tarea con Enter
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && taskInput.value.trim() !== '') {
    addTask(taskInput.value);
    taskInput.value = ''; // Limpiar input
  }
});

// Función para agregar tareas
function addTask(taskText) {
  const li = document.createElement('li');
  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  taskContent.classList.add('task-text');

  // Contenedor para botones de acción
  const actions = document.createElement('div');
  actions.className = 'actions';

  // Botón para marcar como completado
  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Botón para editar tarea
  const editBtn = document.createElement('button');
  editBtn.innerHTML = '<i class="fas fa-edit"></i>';
  editBtn.addEventListener('click', () => {
    const newTask = prompt('Edita tu tarea:', taskContent.textContent);
    if (newTask && newTask.trim() !== '') {
      taskContent.textContent = newTask;
    }
  });

  // Botón para eliminar tarea
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt delete"></i>';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // Agregar botones al contenedor de acciones
  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  // Agregar texto y acciones al elemento de la lista
  li.appendChild(taskContent);
  li.appendChild(actions);

  // Añadir la tarea al DOM
  taskList.appendChild(li);
}

