import { displayList } from "./display";
import { todoItem } from "./todo";

function viewDetails(obj, todo) {
    document.getElementById("container").style.display= "none";
    document.getElementById("blank").style.height = "100vh";
    document.getElementById("popupForm-todo-detail").style.display = "block";

    let todoDetailContainer = document.getElementById("todo-detail-container");

    let projectContainer = document.createElement("div");
    projectContainer.id = "todo-project";
    let titleContainer = document.createElement("div");
    titleContainer.id = "todo-title";
    let descriptionContainer = document.createElement("div");
    descriptionContainer.id = "todo-description";
    let dateContainer = document.createElement("div");
    dateContainer.id = "todo-date";
    let priorityContainer = document.createElement("div");
    priorityContainer.id = "todo-priority";

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

    todoDetailContainer.appendChild(projectContainer);
    todoDetailContainer.appendChild(titleContainer);
    todoDetailContainer.appendChild(descriptionContainer);
    todoDetailContainer.appendChild(dateContainer);
    todoDetailContainer.appendChild(priorityContainer);

    const buttons = document.getElementById("buttons-todo-edit-submit");
    const editButton = document.createElement('button');
    editButton.id = 'edit-todo';
    editButton.textContent = "Edit";
    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete-todo';
    deleteButton.textContent = "Delete";
    const closeButton = document.createElement('button');
    closeButton.id = 'close-todo';
    closeButton.textContent = "Close";

    buttons.appendChild(editButton);
    buttons.appendChild(deleteButton);
    buttons.appendChild(closeButton);

    editButton.addEventListener("click", () => {
        buttons.textContent = '';
        todoDetailContainer.textContent = '';

        let form = document.createElement('form');
        form.id = "todo-item-edit-form"

        // Project Input
        let projectContainer = document.createElement('div');
        projectContainer.className = "form-edit" 
        let projectLabel = document.createElement('label');
        projectLabel.for = 'project-input';
        projectLabel.textContent = 'Project';
        projectLabel.style.fontWeight = 'bold';
        let projectSelect = document.createElement('select');
        projectSelect.id = 'project-input'
        projectSelect.name = 'project';
        projectSelect.value = todo.project;
        for (let i = 0; i < obj.returnProjects().length; i++) {
            let projectOption = document.createElement('option');
            projectOption.value = obj.returnProjects()[i];
            projectOption.textContent = obj.returnProjects()[i];
            projectOption.selected = obj.returnProjects()[i] == todo.project;
            projectSelect.appendChild(projectOption);
        };
        projectContainer.appendChild(projectLabel);
        projectContainer.appendChild(projectSelect);
        form.appendChild(projectContainer);

        // Title Input
        let titleContainer = document.createElement('div');
        titleContainer.className = "form-edit";
        let titleLabel = document.createElement('label');
        titleLabel.for = 'title-input';
        titleLabel.textContent = 'Title';
        titleLabel.style.fontWeight = 'bold';
        let titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.name = 'title';
        titleInput.id = 'title-input';
        titleInput.value = todo.title;
        titleContainer.appendChild(titleLabel);
        titleContainer.appendChild(titleInput);
        form.appendChild(titleContainer);

        // Description Input
        let descriptionContainer = document.createElement('div');
        descriptionContainer.className = "form-edit" ;
        let descriptionLabel = document.createElement('label');
        descriptionLabel.for = 'description-input';
        descriptionLabel.textContent = 'Description'
        descriptionLabel.style.fontWeight = 'bold';
        let descriptionInput = document.createElement('textarea');
        descriptionInput.id = 'description-input'
        descriptionInput.name = 'description';
        descriptionInput.value = todo.description;
        descriptionContainer.appendChild(descriptionLabel);
        descriptionContainer.appendChild(descriptionInput);
        form.appendChild(descriptionContainer);

        // Date Input
        let dateContainer = document.createElement('div');
        dateContainer.className = "form-edit";
        let dateLabel = document.createElement('label');
        dateLabel.for = 'date-input';
        dateLabel.textContent = 'Date'
        dateLabel.style.fontWeight = 'bold';
        let dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.id = 'date-input';
        dateInput.name = 'date';
        dateInput.value = todo.dueDate;
        dateContainer.appendChild(dateLabel);
        dateContainer.appendChild(dateInput);
        form.appendChild(dateContainer);

        // Priority Input
        let priorityContainer = document.createElement('div');
        priorityContainer.className = "form-edit";
        let priorityLabel = document.createElement('label');
        priorityLabel.for = 'priority-input';
        priorityLabel.textContent = 'Priority'
        priorityLabel.style.fontWeight = 'bold';
        let priorityInput = document.createElement('input');
        priorityInput.type = 'checkbox';
        priorityInput.id = 'priority-input';
        priorityInput.name = 'priority';
        priorityInput.checked = todo.priority;
        priorityContainer.appendChild(priorityLabel);
        priorityContainer.appendChild(priorityInput);
        form.appendChild(priorityContainer);

        todoDetailContainer.appendChild(form);
        

        const submitButton = document.createElement('button');
        submitButton.id = 'submit-edit';
        submitButton.textContent = 'Submit';
        const cancelButton = document.createElement('button');
        cancelButton.id = 'cancel-edit';
        cancelButton.textContent = 'Cancel';
        buttons.appendChild(submitButton);
        buttons.appendChild(cancelButton);

        submitButton.addEventListener("click", () => {
            buttons.textContent = '';
            todoDetailContainer.textContent = '';
            let todoEditData = new FormData(form);
            let newProject = todoEditData.get('project');
            let newTitle = todoEditData.get('title');
            let newDescription = todoEditData.get('description');
            let newDate = todoEditData.get('date');
            let newPriority = todoEditData.get('priority');
            newPriority = (newPriority=='on');
            let todoEdit = new todoItem(newProject, newTitle, newDescription, newDate, newPriority);
            obj.modifyTodo(todo, todoEdit);
            viewDetails(obj, todoEdit);
        });
    
        cancelButton.addEventListener("click", () => {
            buttons.textContent = '';
            todoDetailContainer.textContent = '';
            viewDetails(obj, todo);
        });

    });

    deleteButton.addEventListener("click", () => {
        buttons.textContent = '';
        todoDetailContainer.textContent = '';
        obj.deleteTodo(todo);
        displayList(obj, obj.returnList());
        document.getElementById("container").style.display= "grid";
        document.getElementById("blank").style.height = "0vh";
        document.getElementById("popupForm-todo-detail").style.display = "none";

    })

    closeButton.addEventListener("click", () => {
        buttons.textContent = '';
        todoDetailContainer.textContent = '';
        displayList(obj, obj.returnList());
        document.getElementById("container").style.display= "grid";
        document.getElementById("blank").style.height = "0vh";
        document.getElementById("popupForm-todo-detail").style.display = "none";
    });
};

export {viewDetails};