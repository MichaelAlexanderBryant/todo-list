import { reviseProjectList } from "./modules/display";
import { todoList } from "./modules/todo";
import { initializeTodoForm } from "./modules/add-todo";
import { initializeProjectForm } from "./modules/add-project";


let projectList = ["N/A"];
reviseProjectList(projectList);
let theList = new todoList();
initializeTodoForm(theList);
initializeProjectForm(projectList);