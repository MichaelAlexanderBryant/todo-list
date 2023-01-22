function initializeViewTodo(lst) {

}

function viewDetails(todo) {
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

    const submit_edit_buttons = document.getElementById("buttons-todo-edit-submit");
    const edit_button = document.createElement('button');
    edit_button.id = 'edit-todo';
    edit_button.textContent = "Edit";
    const close_button = document.createElement('button');
    close_button.id = 'close-todo';
    close_button.textContent = "Close";

    submit_edit_buttons.appendChild(edit_button);
    submit_edit_buttons.appendChild(close_button);

    edit_button.addEventListener("click", () => {
        submit_edit_buttons.textContent = '';
        const submit_button = document.createElement('button');
        submit_button.id = 'submit-edit';
        submit_button.textContent = 'Submit';
        const cancel_button = document.createElement('button');
        cancel_button.id = 'cancel_edit';
        cancel_button.textContent = 'Cancel';
        submit_edit_buttons.appendChild(submit_button);
        submit_edit_buttons.appendChild(cancel_button);

        submit_button.addEventListener("click", () => {
            submit_edit_buttons.textContent = '';
            viewDetails(todo);
        });
    
        cancel_button.addEventListener("click", () => {
            submit_edit_buttons.textContent = '';
            viewDetails(todo);
        });

    });

    close_button.addEventListener("click", () => {
        document.getElementById("container").style.display= "grid";
        document.getElementById("blank").style.height = "0vh";
        document.getElementById("popupForm-todo-detail").style.display = "none";
    });
};

export {initializeViewTodo, viewDetails};