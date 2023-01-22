import { displayProjects } from "./modules/display";
import { todoList } from "./modules/todo";
import { initializeTodoForm } from "./modules/add-todo";
import { initializeProjectForm } from "./modules/add-project";
import { initializeFilters } from "./modules/change-filter";

let theList = new todoList();
displayProjects(theList);
initializeTodoForm(theList);
initializeProjectForm(theList);
initializeFilters(theList);