class todoItem {
    constructor(project, title, description, dueDate, priority) {
        this.project = project;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
};

class todoList {
    constructor() {
        this.allTodoItems = [];
        this.allProjects = ["N/A"];
    };

    returnList() {
        return this.allTodoItems;
    };

    insertTodo(item) {
        this.allTodoItems.push(item);
    };

    deleteTodo(item) {
        for (let i = 0; i < this.allTodoItems.length; i++) {
            if (this.allTodoItems[i] == item) {
                this.allTodoItems.splice(i,1);
            };
        };
    };

    modifyTodo(item, newItem) {
        for (let i = 0; i < this.allTodoItems.length; i++) {
            if (this.allTodoItems[i] == item) {
                this.allTodoItems.splice(i,1);
            };
        };
        this.allTodoItems.push(newItem);
    };

    returnProjects() {
        return this.allProjects;
    };

    insertProject(project) {
        this.allProjects.push(project);
    };

    sortProjects() {
        this.allProjects.sort();
    };
};

export {todoItem, todoList};