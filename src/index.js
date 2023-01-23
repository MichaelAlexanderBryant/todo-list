import { displayList, displayProjects } from "./modules/display";
import { todoList } from "./modules/todo";
import { initializeTodoForm } from "./modules/add-todo";
import { initializeProjectForm } from "./modules/add-project";
import { initializeFilters } from "./modules/change-filter";

// localStorage.clear()
let theList = new todoList();
theList.unpackLocalStorage();
displayList(theList, theList.returnList());
displayProjects(theList);
initializeTodoForm(theList);
initializeProjectForm(theList);
initializeFilters(theList);