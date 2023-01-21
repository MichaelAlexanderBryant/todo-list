import { displayProjects } from "./display";

function initializeProjectForm(lst) {
    const addProjectButton = document.getElementById("projects-container");
    addProjectButton.addEventListener("click", () => {
        document.getElementById("container").style.display= "none";
        document.getElementById("blank").style.height = "100vh";
        document.getElementById("popupForm-project").style.display = "block";  
    });

    const submitButtonProject = document.getElementById("submit-button-project");
    submitButtonProject.addEventListener("click", (event) => {
        event.preventDefault();
        if (document.getElementById("project-name-input").value == '') {
            return alert('Please include project name');
        };
        let newProjectName = document.getElementById("project-name-input").value;
        document.getElementById("project-name-input").value = '';
        lst.insertProject(newProjectName);
        displayProjects(lst);
        document.getElementById("container").style.display= "grid";
        document.getElementById("blank").style.height = "0vh";
        document.getElementById("popupForm-project").style.display = "none";
    });

    const cancelButtonProject = document.getElementById("cancel-button-project");
    cancelButtonProject.addEventListener("click", () => {
        document.getElementById("container").style.display= "grid";
        document.getElementById("blank").style.height = "0vh";
        document.getElementById("popupForm-project").style.display = "none";
    });
};

export {initializeProjectForm};