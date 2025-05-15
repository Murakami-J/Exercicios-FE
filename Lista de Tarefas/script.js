const form = document.getElementById('task-form');
// const form = document.querySelector('#task-form'); mesma coisa que a linha acima
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const toggleCompleteBtn = document.getElementById('toggle-completed');

let hideCompleted = false;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if(taskText === "") return;

    addTask(taskText);
    taskInput.value = "";
    saveTasks();
    updateTaskStatus();
});

function addTask(taskText, isCompleted = false) {
   const li = document.createElement('li');
   li.classList.add('task-item');

   // Criar checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');
    checkbox.checked = isCompleted;
    checkbox.addEventListener('change', () => {
        saveTasks();
        updateTaskStatus();
    });

    // Criar span para a descrição da tarefa
    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');

    // Criar botão de edição
    const editBtn = document.createElement('button');
    editBtn.innerHTML = "✏️";
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', function () {
        const newText = prompt("Editar tarefa", span.textContent);
        if(newText) {
            span.textContent = newText;
            saveTasks();
        }
    });

    // Criar botão de exclusão
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        const exclude = confirm("Confirmar exclusão de tarefa", span.textContent);

        if(exclude) {
            li.remove();
            saveTasks();
            updateTaskStatus();
        }
    });

    // Adicionar elementos ao <li>
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Adicionar <li> à lista
    taskList.appendChild(li);
    li.classList.add('item-task');
}


// Salvar no LocalStorage
function saveTasks() {
    const tasks = [...taskList.children].map(li => ({
        text: li.querySelector('.task-text').textContent,
        done: li.querySelector('.task-checkbox').checked
    }));
 
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Carregar tarefas salvas ao abrir a página
window.addEventListener('load', function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task.text, task.done));
    updateTaskStatus();
});


// Atualizar contador de tarefas concluídas e a barra de progresso
function updateTaskStatus(){
    const tasks = tasksList.children.length;
    const completedTasks = [...taskList.children].filter(li => 
        li.querySelector('.task-checkbox').checked
    ).length;

    // Evita divisão por zero
    const progress = tasks > 0 ? (completedTasks / tasks) * 100 : 0;

    // Atualiza a barra de progresso
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${completedTasks} / ${tasks} concluído ${tasks === 1 ? '' : 's'} (${progress.toFixed(1)}%)`; 
}

// Botão para ocultar tarefas concluídas
toggleCompleteBtn.addEventListener('click', function() {
    hideCompleted = !hideCompleted;
    [...taskList.children].forEach(li => {
       const isChecked = li.querySelector('.task-checkbox').checked;
       li.style.display = hideCompleted && isChecked ? 'none' : 'flex';
    });

    toggleCompleteBtn.textContent = hideCompleted ? 'Mostrar concluídas' : 'Ocultar concluídas';
});