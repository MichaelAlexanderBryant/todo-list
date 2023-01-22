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

    modifyTodo(idx, project, title, description, dueDate, priority) {
        this.allTodoItems[idx].project = project;
        this.allTodoItems[idx].title = title;
        this.allTodoItems[idx].description = description;
        this.allTodoItems[idx].dueDate = dueDate;
        this.allTodoItems[idx].priority = priority;
    }

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