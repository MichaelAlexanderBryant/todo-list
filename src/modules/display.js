function displayList(lst) {
    const contentArea = document.getElementById("items");
    contentArea.textContent = '';
    lst.sort(function(a,b){return new Date(a.dueDate) - new Date(b.dueDate);});
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
        if (lst[i].project != "N/A") {
            projectDiv.textContent = lst[i].project;
        } else {
            projectDiv.textContent = "";
        };
        if (lst[i].priority == true) {
            itemContainer.className = 'item urgent';
        };
        itemContainer.appendChild(checkboxInput);
        itemContainer.appendChild(infoDiv);
        itemContainer.appendChild(projectDiv);
        contentArea.appendChild(itemContainer);
    };
};

function reviseProjectList(projectList) {
    const projectForm = document.getElementById("project");
    const projectSidebar = document.getElementById("project-list");
    projectForm.textContent = '';
    projectSidebar.textContent = '';
    projectList.sort();
    for (let i = 0; i < projectList.length; i++) {
        let projectOption = document.createElement('option');
        projectOption.value = projectList[i];
        projectOption.textContent = projectList[i];
        projectForm.appendChild(projectOption);

        if (projectList[i] != "N/A") {
            let projectItem = document.createElement('div');
            let projectItemSpan = document.createElement('span');
            projectItem.className = "project-list-item";
            projectItemSpan.textContent = projectList[i];
            projectItem.appendChild(projectItemSpan);
            projectSidebar.appendChild(projectItem);
        };
    };
    document.getElementById("project").value = '';
};

export {displayList, reviseProjectList};