class todoItem {
    constructor(project, title, description, dueDate, priority) {
        this.project = project;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
};

const addTodo = document.getElementById("add-button");
addTodo.addEventListener("click", () => {
    console.log("event listener test");
});