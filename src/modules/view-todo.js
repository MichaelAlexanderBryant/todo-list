
function initializeViewTodo() {
    const edit = document.getElementById('edit-button-todo-detail');
    edit.addEventListener("click", () => {
        let project = document.getElementById("todo-project").textContent;
        let title = document.getElementById("todo-title").textContent;
        let description = document.getElementById("todo-description").textContent;
        let date = document.getElementById("todo-date").textContent;
        let priority = document.getElementById("todo-priority").textContent;

        document.getElementById("todo-project").textContent = '';
        document.getElementById("todo-title").textContent = '';
        document.getElementById("todo-description").textContent = '';
        document.getElementById("todo-date").textContent = '';
        document.getElementById("todo-priority").textContent = '';


    })
    const close = document.getElementById('cancel-button-todo-detail');
    close.addEventListener("click", () => {
        document.getElementById("todo-project").textContent = '';
        document.getElementById("todo-title").textContent = '';
        document.getElementById("todo-description").textContent = '';
        document.getElementById("todo-date").textContent = '';
        document.getElementById("todo-priority").textContent = '';


        document.getElementById("container").style.display= "grid";
        document.getElementById("blank").style.height = "0vh";
        document.getElementById("popupForm-todo-detail").style.display = "none";
    })
}

function viewDetails(todo) {
    console.table(todo);
    document.getElementById("container").style.display= "none";
    document.getElementById("blank").style.height = "100vh";
    document.getElementById("popupForm-todo-detail").style.display = "block";

    let projectContainer = document.getElementById("todo-project");
    let titleContainer = document.getElementById("todo-title");
    let descriptionContainer = document.getElementById("todo-description");
    let dateContainer = document.getElementById("todo-date");
    let priorityContainer = document.getElementById("todo-priority");

    let projectHeader = document.createElement("div");
    projectHeader.id = "todo-project-header"
    projectHeader.textContent = 'Project';
    let titleHeader = document.createElement("div");
    titleHeader.id = "todo-title-header"
    titleHeader.textContent = 'Title';
    let descriptionHeader = document.createElement("div");
    descriptionHeader.id = "todo-description-header"
    descriptionHeader.textContent = 'Description';
    let dateHeader = document.createElement("div");
    dateHeader.id = "todo-date-header"
    dateHeader.textContent = 'Date';
    let priorityHeader = document.createElement("div");
    priorityHeader.id = "todo-priority-header"
    priorityHeader.textContent = 'Priority';

    let projectInfo = document.createElement('div');
    projectInfo.id = "todo-project-info"
    projectInfo.textContent = todo.project;
    let titleInfo = document.createElement("div");
    titleInfo.id = "todo-title-info"
    titleInfo.textContent = todo.title;
    let descriptionInfo = document.createElement("div");
    descriptionInfo.id = "todo-description-info"
    descriptionInfo.textContent = todo.description;
    let dateInfo = document.createElement("div");
    dateInfo.id = "todo-date-info"
    dateInfo.textContent = todo.dueDate;
    let priorityInfo = document.createElement("div");
    priorityInfo.id = "todo-priority-info"
    priorityInfo.textContent = todo.priority;

    projectContainer.appendChild(projectHeader);
    projectContainer.appendChild(projectInfo);
    titleContainer.appendChild(titleHeader);
    titleContainer.appendChild(titleInfo);
    descriptionContainer.appendChild(descriptionHeader);
    descriptionContainer.appendChild(descriptionInfo);
    dateContainer.appendChild(dateHeader);
    dateContainer.appendChild(dateInfo);
    priorityContainer.appendChild(priorityHeader);
    priorityContainer.appendChild(priorityInfo);


};

export {initializeViewTodo, viewDetails};