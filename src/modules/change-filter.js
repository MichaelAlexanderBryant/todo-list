import { displayList } from "./display";

function initializeFilters(lst) {
    const filterDisplay = document.getElementById('filter');
    const all = document.getElementById('all');
    all.addEventListener("click", () => {
        filterDisplay.textContent = '';
        let allDiv = document.createElement('div');
        allDiv.id = 'filter-text'
        allDiv.textContent = 'All';
        filterDisplay.appendChild(allDiv);
        displayList(lst.returnList());
    });

    const today = document.getElementById('today');
    today.addEventListener("click", () => {
        filterDisplay.textContent = '';
        let todayDiv = document.createElement('div');
        todayDiv.id = 'filter-text'
        todayDiv.textContent = 'Today';
        filterDisplay.appendChild(todayDiv);
        displayList(lst.returnList());
    });

    const week = document.getElementById('week');
    week.addEventListener("click", () => {
        filterDisplay.textContent = '';
        let weekDiv = document.createElement('div');
        weekDiv.id = 'filter-text'
        weekDiv.textContent = 'Week';
        filterDisplay.appendChild(weekDiv);
        displayList(lst.returnList());
    });
};

function setFilterToProject(lst, project) {
    const filterDisplay = document.getElementById('filter');
    filterDisplay.textContent = '';
    let projectDiv = document.createElement('div');
    projectDiv.id = 'filter-text'
    projectDiv.textContent = project;
    filterDisplay.appendChild(projectDiv);
    displayList(lst.returnList());
};

export {initializeFilters, setFilterToProject};