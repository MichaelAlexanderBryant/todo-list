import { reviseProjectList } from "./modules/display";
import { todoList } from "./modules/todo";
import { initializeTodoForm } from "./modules/add-todo";
import { initializeProjectForm } from "./modules/add-project";
import { initializeFilters } from "./modules/change-filter";


let projectList = ["N/A"];
let theList = new todoList();
reviseProjectList(projectList);
initializeTodoForm(theList);
initializeProjectForm(projectList);
initializeFilters(theList);