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
        this.allTodoItemsForStorage = [];
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

    storeInLocalStorage(toStore) {
        if (toStore == "todo") {
            this.allTodoItemsForStorage = [];
            for (let i = 0; i < this.allTodoItems.length; i++) {
                let currentTodo = this.allTodoItems[i];
                let newTodoObj = {project: currentTodo.project,
                    title: currentTodo.title,
                    description: currentTodo.description,
                    dueDate: currentTodo.dueDate,
                    priority: currentTodo.priority};
                this.allTodoItemsForStorage.push(newTodoObj);
            };
            localStorage.setItem('todos', JSON.stringify(this.allTodoItemsForStorage))
        } else {
            localStorage.setItem('projects', JSON.stringify(this.allProjects))
        };
    };

    unpackLocalStorage() {
        if (!(localStorage.getItem('todos') == null)) {
            let arrTodos =  JSON.parse(localStorage.getItem('todos'));
            for (let i = 0; i < arrTodos.length; i++) {
                let project = arrTodos[i].project;
                let title = arrTodos[i].title;
                let description = arrTodos[i].description;
                let dueDate = arrTodos[i].dueDate;
                let priority = arrTodos[i].priority;
                let todo = new todoItem(project, title, description, dueDate, priority);
                this.allTodoItems.push(todo);
            };
        };
        if (!(localStorage.getItem('projects') == null)) {
            this.allProjects =  JSON.parse(localStorage.getItem('projects'));
        };
    };

    retrieveTodos() {

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