/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class todoItem {\n    constructor(project, title, description, dueDate, priority) {\n        this.project = project;\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    };\n};\n\nclass todoList {\n    constructor() {\n        this.allTodoItems = [];\n    };\n\n    returnList() {\n        return this.allTodoItems;\n    };\n\n    insertTodo(item) {\n        this.allTodoItems.push(item);\n    };\n\n    sortList() {\n        console.log(\"sort\");\n    };\n};\n\nconst contentArea = document.getElementById(\"todo-list\");\nfunction displayList(lst) {\n    contentArea.textContent = '';\n    console.log(lst[0].title);\n    for (let i = 0; i < lst.length; i++) {\n        let itemContainer = document.createElement('div');\n        itemContainer.textContent = lst[i].title;\n        contentArea.appendChild(itemContainer);\n    };\n};\n\ntheList = new todoList();\n\nconst addTodo = document.getElementById(\"add-button\");\naddTodo.addEventListener(\"click\", () => {\n    document.getElementById(\"blank\").style.height = \"100vh\";\n    document.getElementById(\"popupForm\").style.display = \"block\";\n});\n\nconst submitButton = document.getElementById(\"submit-button\");\nsubmitButton.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    if ((document.getElementById(\"title\").value == '') ||  (document.getElementById(\"due-date\").value == '')) {\n        return alert('Please include todo title and due date');\n    };\n    let newProject = document.getElementById(\"project\").value;\n    document.getElementById(\"project\").value = '';\n    let newTitle = document.getElementById(\"title\").value;\n    document.getElementById(\"title\").value = '';\n    let newDescription = +document.getElementById(\"description\").value;\n    document.getElementById(\"description\").value = '';\n    let newDueDate = document.getElementById(\"due-date\").value;\n    document.getElementById(\"due-date\").value = '';\n    let newPriority = document.querySelector(\"#priority\").checked;\n    document.querySelector(\"#priority\").checked = false;\n    let newTodo = new todoItem(newProject, newTitle, newDescription, newDueDate, newPriority);\n    theList.insertTodo(newTodo);\n    displayList(theList.returnList());\n    document.getElementById(\"blank\").style.height = \"0vh\";\n    document.getElementById(\"popupForm\").style.display = \"none\";\n});\n\nconst cancelButton = document.getElementById(\"cancel-button\");\ncancelButton.addEventListener(\"click\", () => {\n    document.getElementById(\"project\").value = '';\n    document.getElementById(\"title\").value = '';\n    document.getElementById(\"description\").value = '';\n    document.getElementById(\"due-date\").value = '';\n    document.querySelector(\"#priority\").checked = false;\n    document.getElementById(\"blank\").style.height = \"0vh\";\n    document.getElementById(\"popupForm\").style.display = \"none\";\n  });\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;