
function initializeViewTodo(lst) {
    const edit = document.getElementById('edit-button-todo-detail');
    edit.addEventListener("click", () => {
        let project = document.getElementById("todo-project-info");
        let title = document.getElementById("todo-title-info");
        let description = document.getElementById("todo-description-info");
        let date = document.getElementById("todo-date-info");
        let priority = document.getElementById("todo-priority-info");

        let projectText = project.textContent;
        let titleText = title.textContent;
        let descriptionText = description.textContent;
        let dateText = date.textContent;
        let priorityText = priority.textContent;

        let projectForm = document.createElement('form');
        project.textContent = '';
        let projectEdit = document.createElement('select');
        projectEdit.id = 'project-edit';
        for (let i = 0; i < lst.returnProjects().length; i++){
            let projectOption = document.createElement('option');
            projectOption.value = lst.returnProjects()[i];
            projectOption.textContent = lst.returnProjects()[i];
            projectEdit.appendChild(projectOption);
            console.log(projectOption);
        };
        projectEdit.name = 'project-edited'
        projectEdit.value = projectText;
        projectForm.appendChild(projectEdit);
        project.appendChild(projectForm);
        let titleForm = document.createElement('form');
        title.textContent = '';
        let titleEdit = document.createElement('input');
        titleEdit.id = 'title-edit';
        titleEdit.type = 'text';
        titleEdit.name = 'title-edited'
        titleEdit.value = titleText;
        titleForm.appendChild(titleEdit);
        title.appendChild(titleForm);
        let descriptionForm = document.createElement('form');
        description.textContent = '';
        let descriptionEdit = document.createElement('textarea');
        descriptionEdit.id = 'description-edit';
        descriptionEdit.name = 'description-edited'
        descriptionEdit.value = descriptionText;
        descriptionEdit.rows = "4";
        descriptionEdit.cols = "25";
        descriptionForm.appendChild(descriptionEdit);
        description.appendChild(descriptionForm);
        let dateForm = document.createElement('form');
        date.textContent = '';
        let dateEdit = document.createElement('input');
        dateEdit.id = 'date-edit';
        dateEdit.type = 'date';
        dateEdit.name = 'date-edited'
        dateEdit.value = dateText;
        dateForm.appendChild(dateEdit);
        date.appendChild(dateForm);
        let priorityForm = document.createElement('form');
        priority.textContent = '';
        let priorityEdit = document.createElement('input');
        priorityEdit.id = 'priority-edit';
        priorityEdit.type = 'checkbox';
        priorityEdit.name = 'priority-edited'
        priorityEdit.checked = priorityText;
        priorityForm.appendChild(priorityEdit);
        priority.appendChild(priorityForm);
    });
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