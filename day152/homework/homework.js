class Todo {
    constructor(id, text) {
        this.id = id;
        this.text = text;
        this.isEditing = false;
    }
}

class TodoApp {
    constructor(listElement, inputElement, addButtonElement) {
        this.listElement = listElement;
        this.inputElement = inputElement;
        this.addButtonElement = addButtonElement;
        this.todos = [];
        this.nextId = 1;

        this.addButtonElement.addEventListener("click", () => this.handleAdd());
        this.inputElement.addEventListener("keydown", (e) => {
            if (e.key === "Enter") this.handleAdd();
        });

        this.render();
    }

    handleAdd() {
        const text = this.inputElement.value.trim();
        if (text === "") return;

        this.addTodo(text);
        this.inputElement.value = "";
        this.inputElement.focus();
    }

    addTodo(text) {
        const todo = new Todo(this.nextId++, text);
        this.todos.push(todo);
        this.render();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        this.render();
    }

    startEditing(id) {
        const todo = this.todos.find((t) => t.id === id);
        if (!todo) return;
        todo.isEditing = true;
        this.render();
    }

    saveEdit(id, newText) {
        const todo = this.todos.find((t) => t.id === id);
        if (!todo) return;

        const trimmed = newText.trim();
        if (trimmed !== "") {
            todo.text = trimmed;
        }
        todo.isEditing = false;
        this.render();
    }

    render() {
        this.listElement.innerHTML = "";

        if (this.todos.length === 0) {
            const emptyMessage = document.createElement("li");
            emptyMessage.className = "empty_message";
            emptyMessage.textContent = "დავალებები ჯერ არ დამატებულა";
            this.listElement.appendChild(emptyMessage);
            return;
        }

        this.todos.forEach((todo) => {
            const li = document.createElement("li");
            li.className = "todo_item";

            if (todo.isEditing) {
                const editInput = document.createElement("input");
                editInput.type = "text";
                editInput.className = "todo_edit_input";
                editInput.value = todo.text;

                editInput.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                        this.saveEdit(todo.id, editInput.value);
                    }
                });

                const saveBtn = document.createElement("button");
                saveBtn.className = "icon_btn edit_btn";
                saveBtn.textContent = "Save";
                saveBtn.addEventListener("click", () => {
                    this.saveEdit(todo.id, editInput.value);
                });

                li.appendChild(editInput);
                li.appendChild(saveBtn);

                // ავტომატურად ავამუშაოთ ინფუთი და მოვათავსოთ კურსორი ბოლოში
                setTimeout(() => {
                    editInput.focus();
                    editInput.setSelectionRange(editInput.value.length, editInput.value.length);
                }, 0);

            } else {
                const span = document.createElement("span");
                span.className = "todo_text";
                span.textContent = todo.text;

                const actions = document.createElement("div");
                actions.className = "todo_actions";

                const editBtn = document.createElement("button");
                editBtn.className = "icon_btn edit_btn";
                editBtn.textContent = "Edit";
                editBtn.addEventListener("click", () => this.startEditing(todo.id));

                const deleteBtn = document.createElement("button");
                deleteBtn.className = "icon_btn delete_btn";
                deleteBtn.textContent = "Delete";
                deleteBtn.addEventListener("click", () => this.deleteTodo(todo.id));

                actions.appendChild(editBtn);
                actions.appendChild(deleteBtn);

                li.appendChild(span);
                li.appendChild(actions);
            }

            this.listElement.appendChild(li);
        });
    }
}

const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");

const app = new TodoApp(todoList, todoInput, addBtn);