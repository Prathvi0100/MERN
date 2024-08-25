document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('new-todo');
    const todoList = document.getElementById('todo-list');

    // Add a new to-do item
    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get the value of the input field
        const newTodoText = todoInput.value.trim();
        
        if (newTodoText === '') return;

        // Create a new list item
        const newTodo = document.createElement('li');
        newTodo.textContent = newTodoText;

        // Create a remove button
        const removeButton = document.createElement('span');
        removeButton.textContent = '×';
        removeButton.classList.add('remove');
        newTodo.appendChild(removeButton);

        // Add the new item to the list
        todoList.appendChild(newTodo);

        // Clear the input field
        todoInput.value = '';

        // Add an event listener to the remove button
        removeButton.addEventListener('click', function() {
            todoList.removeChild(newTodo);
        });
    });

    // Add event listeners to existing items
    todoList.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove')) {
            const item = e.target.parentElement;
            todoList.removeChild(item);
        }
    });
});
