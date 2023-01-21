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
    };

    returnList() {
        return this.allTodoItems;
    };

    insertTodo(item) {
        this.allTodoItems.push(item);
    };
};

export {todoItem, todoList};