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

    sortList() {
        console.log("sort");
    };
};

const contentArea = document.getElementById("items");
function displayList(lst) {
    contentArea.textContent = '';
    for (let i = 0; i < lst.length; i++) {
        let itemContainer = document.createElement('div');
        itemContainer.className = "item";
        let checkboxInput = document.createElement('input');
        checkboxInput.type = "checkbox";
        checkboxInput.class = "checkbox";
        checkboxInput.name = "checkbox";
        let infoDiv = document.createElement('div');
        let titleDiv = document.createElement('div');
        titleDiv.className = "task-title";
        titleDiv.textContent = lst[i].title;
        let dueDateDiv = document.createElement('div');
        dueDateDiv.className = "task-due-date";
        dueDateDiv.textContent = lst[i].dueDate;
        infoDiv.appendChild(titleDiv);
        infoDiv.appendChild(dueDateDiv);
        let projectDiv = document.createElement('div');
        projectDiv.className = "task-project";
        projectDiv.textContent = lst[i].project;
        itemContainer.appendChild(checkboxInput);
        itemContainer.appendChild(infoDiv);
        itemContainer.appendChild(projectDiv);
        contentArea.appendChild(itemContainer);
    };
};

theList = new todoList();

const addTodo = document.getElementById("add-button");
addTodo.addEventListener("click", () => {
    document.getElementById("blank").style.height = "100vh";
    document.getElementById("popupForm").style.display = "block";
});

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if ((document.getElementById("title").value == '') ||  (document.getElementById("due-date").value == '')) {
        return alert('Please include todo title and due date');
    };
    let newProject = document.getElementById("project").value;
    document.getElementById("project").value = '';
    let newTitle = document.getElementById("title").value;
    document.getElementById("title").value = '';
    let newDescription = +document.getElementById("description").value;
    document.getElementById("description").value = '';
    let newDueDate = document.getElementById("due-date").value;
    document.getElementById("due-date").value = '';
    let newPriority = document.querySelector("#priority").checked;
    document.querySelector("#priority").checked = false;
    let newTodo = new todoItem(newProject, newTitle, newDescription, newDueDate, newPriority);
    theList.insertTodo(newTodo);
    displayList(theList.returnList());
    document.getElementById("blank").style.height = "0vh";
    document.getElementById("popupForm").style.display = "none";
});

const cancelButton = document.getElementById("cancel-button");
cancelButton.addEventListener("click", () => {
    document.getElementById("project").value = '';
    document.getElementById("title").value = '';
    document.getElementById("description").value = '';
    document.getElementById("due-date").value = '';
    document.querySelector("#priority").checked = false;
    document.getElementById("blank").style.height = "0vh";
    document.getElementById("popupForm").style.display = "none";
  });