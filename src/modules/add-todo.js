import { todoItem } from "./todo";
import { displayList } from "./display";

function initializeTodoForm(theList) {
    const addTodo = document.getElementById("add-button");
    addTodo.addEventListener("click", () => {
        document.getElementById("container").style.display= "none";
        document.getElementById("blank").style.height = "100vh";
        document.getElementById("popupForm").style.display = "block";
    });

    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        if ((document.getElementById("title").value == '') ||  (document.getElementById("due-date").value == '')) {
            return alert('Please include todo title and due date');
        };
        let newProject = document.getElementById("project").value;
        document.getElementById("project").value = '';
        let newTitle = document.getElementById("title").value;
        document.getElementById("title").value = '';
        let newDescription = +document.getElementById("description").value;
        document.getElementById("description").value = '';
        let newDueDate = document.getElementById("due-date").value;
        document.getElementById("due-date").value = '';
        let newPriority = document.querySelector("#priority").checked;
        document.querySelector("#priority").checked = false;
        let newTodo = new todoItem(newProject, newTitle, newDescription, newDueDate, newPriority);
        theList.insertTodo(newTodo);
        displayList(theList.returnList());
        document.getElementById("container").style.display= "grid";
        document.getElementById("blank").style.height = "0vh";
        document.getElementById("popupForm").style.display = "none";
    });

    const cancelButton = document.getElementById("cancel-button");
    cancelButton.addEventListener("click", () => {
        document.getElementById("project").value = '';
        document.getElementById("title").value = '';
        document.getElementById("description").value = '';
        document.getElementById("due-date").value = '';
        document.querySelector("#priority").checked = false;
        document.getElementById("container").style.display= "grid";
        document.getElementById("blank").style.height = "0vh";
        document.getElementById("popupForm").style.display = "none";
    });
};

export {initializeTodoForm};