class Task {
    constructor(id, text, done = false) {
        this.id = id;
        this.text = text;
        this.done = done;
        this.isEditing = false;
    }
}

class TodoApp {
    constructor({ listEl, inputEl, addBtnEl, ratioEl, ringFillEl, subtitleEl }) {
        this.listEl = listEl;
        this.inputEl = inputEl;
        this.addBtnEl = addBtnEl;
        this.ratioEl = ratioEl;
        this.ringFillEl = ringFillEl;
        this.subtitleEl = subtitleEl;

        this.circumference = 2 * Math.PI * 40;
        this.tasks = [];
        this.nextId = 1;

        this.addBtnEl.addEventListener("click", () => this.handleAdd());
        this.inputEl.addEventListener("keydown", (e) => {
            if (e.key === "Enter") this.handleAdd();
        });

        this.render();
    }

    seed(initialTasks) {
        initialTasks.forEach(({ text, done }) => {
            this.tasks.push(new Task(this.nextId++, text, done));
        });
        this.render();
    }

    handleAdd() {
        const text = this.inputEl.value.trim();
        if (text === "") return;

        this.tasks.push(new Task(this.nextId++, text));
        this.inputEl.value = "";
        this.inputEl.focus();
        this.render();
    }

    toggleDone(id) {
        const task = this.tasks.find((t) => t.id === id);
        if (!task) return;
        task.done = !task.done;
        this.render();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter((t) => t.id !== id);
        this.render();
    }

    startEditing(id) {
        const task = this.tasks.find((t) => t.id === id);
        if (!task) return;
        task.isEditing = true;
        this.render();
    }

    saveEdit(id, newText) {
        const task = this.tasks.find((t) => t.id === id);
        if (!task) return;

        const trimmed = newText.trim();
        if (trimmed !== "") task.text = trimmed;
        task.isEditing = false;
        this.render();
    }

    updateProgress() {
        const total = this.tasks.length;
        const done = this.tasks.filter((t) => t.done).length;

        this.ratioEl.textContent = `${done}/${total}`;

        const progress = total === 0 ? 0 : done / total;
        const offset = this.circumference - progress * this.circumference;
        this.ringFillEl.style.strokeDasharray = this.circumference;
        this.ringFillEl.style.strokeDashoffset = offset;

        if (total === 0) {
            this.subtitleEl.textContent = "Add your first task";
        } else if (done === total) {
            this.subtitleEl.textContent = "All done! 🎉";
        } else {
            this.subtitleEl.textContent = "Keep it up";
        }
    }

    render() {
        this.listEl.innerHTML = "";

        if (this.tasks.length === 0) {
            const empty = document.createElement("li");
            empty.className = "empty_state";
            empty.textContent = "No tasks yet";
            this.listEl.appendChild(empty);
        } else {
            this.tasks.forEach((task) => {
                const li = document.createElement("li");
                li.className = "task_item";

                const checkbox = document.createElement("button");
                checkbox.className = "task_checkbox" + (task.done ? " done" : "");
                checkbox.addEventListener("click", () => this.toggleDone(task.id));
                li.appendChild(checkbox);

                if (task.isEditing) {
                    const editInput = document.createElement("input");
                    editInput.type = "text";
                    editInput.className = "task_edit_input";
                    editInput.value = task.text;

                    editInput.addEventListener("keydown", (e) => {
                        if (e.key === "Enter") this.saveEdit(task.id, editInput.value);
                    });

                    li.appendChild(editInput);

                    setTimeout(() => {
                        editInput.focus();
                        editInput.setSelectionRange(editInput.value.length, editInput.value.length);
                    }, 0);

                    const actions = document.createElement("div");
                    actions.className = "task_actions";

                    const saveBtn = document.createElement("button");
                    saveBtn.className = "icon_btn";
                    saveBtn.textContent = "✔";
                    saveBtn.addEventListener("click", () => this.saveEdit(task.id, editInput.value));
                    actions.appendChild(saveBtn);

                    li.appendChild(actions);
                } else {
                    const text = document.createElement("span");
                    text.className = "task_text" + (task.done ? " done" : "");
                    text.textContent = task.text;
                    li.appendChild(text);

                    const actions = document.createElement("div");
                    actions.className = "task_actions";

                    const editBtn = document.createElement("button");
                    editBtn.className = "icon_btn";
                    editBtn.textContent = "✎";
                    editBtn.addEventListener("click", () => this.startEditing(task.id));

                    const deleteBtn = document.createElement("button");
                    deleteBtn.className = "icon_btn delete";
                    deleteBtn.textContent = "🗑";
                    deleteBtn.addEventListener("click", () => this.deleteTask(task.id));

                    actions.appendChild(editBtn);
                    actions.appendChild(deleteBtn);
                    li.appendChild(actions);
                }

                this.listEl.appendChild(li);
            });
        }

        this.updateProgress();
    }
}


const app = new TodoApp({
    listEl: document.getElementById("taskList"),
    inputEl: document.getElementById("taskInput"),
    addBtnEl: document.getElementById("addBtn"),
    ratioEl: document.getElementById("progressRatio"),
    ringFillEl: document.getElementById("progressRingFill"),
    subtitleEl: document.getElementById("progressSubtitle")
});

app.seed([
    { text: "Build a todo app", done: true },
    { text: "Write an article about building a todo app", done: false },
    { text: "Publish the article", done: false }
]);