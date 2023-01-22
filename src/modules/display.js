import { setFilterToProject } from "./change-filter";
import { viewDetails } from "./view-todo";

function displayList(obj, lst) {
    const contentArea = document.getElementById("items");
    contentArea.textContent = '';
    if (lst.length > 1) {
        lst.sort(function(a,b){return new Date(a.dueDate) - new Date(b.dueDate);});
    };
    const currentFilter = document.getElementById('filter-text').textContent;
    if (lst.length > 0) {
        if (!(arguments[2] == undefined)) {
            lst = lst.filter(d => {
                return (d.project == arguments[2]);
            });
        }
        else if (currentFilter == "Today") {
            let currentDate = new Date();
            lst = lst.filter(d => {
                let day = d.dueDate.substring(8,10);
                let month = d.dueDate.substring(5,7);
                let year = d.dueDate.substring(0,4);
                return ((currentDate.getDate() == +day) && (currentDate.getMonth() == +month-1) && (currentDate.getFullYear() == +year));
            });
        } else if (currentFilter == "Week") {
            const oneWeekMilliseconds = 6.048e+8
            let currentDate = new Date();
            let currentDay = currentDate.getDate();
            let currentMonth = currentDate.getMonth();
            let currentYear = currentDate.getFullYear();
            currentDate = new Date(currentYear, currentMonth, currentDay).getTime();
            let oneWeekAheadDate = new Date(currentDate + oneWeekMilliseconds).getTime();
            lst = lst.filter(d => {
                let day = d.dueDate.substring(8,10);
                let month = d.dueDate.substring(5,7);
                let year = d.dueDate.substring(0,4);
                let time = new Date(+year, +month-1, +day).getTime();
                return ((currentDate <= time) && (oneWeekAheadDate >= time));
            });
        };
    };
    for (let i = 0; i < lst.length; i++) {
        let itemContainer = document.createElement('div');
        itemContainer.className = "item";
        let checkboxInput = document.createElement('input');
        checkboxInput.type = "checkbox";
        checkboxInput.class = "checkbox";
        checkboxInput.name = "checkbox";
        let infoDiv = document.createElement('div');
        infoDiv.addEventListener("click", () => {
            viewDetails(obj, lst[i]);
        });
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

function displayProjects(obj) {
    const projectForm = document.getElementById("project");
    const projectSidebar = document.getElementById("project-list");
    projectForm.textContent = '';
    projectSidebar.textContent = '';
    obj.sortProjects();
    for (let i = 0; i < obj.returnProjects().length; i++) {
        let projectOption = document.createElement('option');
        projectOption.value = obj.returnProjects()[i];
        projectOption.textContent = obj.returnProjects()[i];
        projectForm.appendChild(projectOption);
        if (obj.returnProjects()[i] != "N/A") {
            let projectItem = document.createElement('div');
            let projectItemSpan = document.createElement('span');
            projectItem.className = "project-list-item";
            projectItemSpan.textContent = obj.returnProjects()[i];
            projectItem.addEventListener("click", () => {
                setFilterToProject(obj, obj.returnProjects()[i]);
                displayList(obj, obj.returnList(), obj.returnProjects()[i]);
            });
            projectItem.appendChild(projectItemSpan);
            projectSidebar.appendChild(projectItem);
        };
    };
    document.getElementById("project").value = '';
};

export {displayList, displayProjects};