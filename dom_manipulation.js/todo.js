document.querySelector('#addTodo').addEventListener('click', function() {
    const todoInput = document.querySelector('#newTodo');
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todoList = document.querySelector('#todoList');
        const newTodoItem = document.createElement('li');
        newTodoItem.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        newTodoItem.appendChild(deleteButton);
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(newTodoItem);
        });

        todoList.appendChild(newTodoItem);
        todoInput.value = '';
    }
});