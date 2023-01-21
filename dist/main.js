/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _modules_add_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add-todo */ \"./src/modules/add-todo.js\");\n/* harmony import */ var _modules_add_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/add-project */ \"./src/modules/add-project.js\");\n\n\n\n\n\n\nlet projectList = [\"N/A\"];\n(0,_modules_display__WEBPACK_IMPORTED_MODULE_0__.reviseProjectList)(projectList);\nlet theList = new _modules_todo__WEBPACK_IMPORTED_MODULE_1__.todoList();\n(0,_modules_add_todo__WEBPACK_IMPORTED_MODULE_2__.initializeTodoForm)(theList);\n(0,_modules_add_project__WEBPACK_IMPORTED_MODULE_3__.initializeProjectForm)(projectList);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-project.js":
/*!************************************!*\
  !*** ./src/modules/add-project.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeProjectForm\": () => (/* binding */ initializeProjectForm)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/modules/display.js\");\n\n\nfunction initializeProjectForm(projectList) {\n    const addProjectButton = document.getElementById(\"projects-container\");\n    addProjectButton.addEventListener(\"click\", () => {\n        document.getElementById(\"container\").style.display= \"none\";\n        document.getElementById(\"blank\").style.height = \"100vh\";\n        document.getElementById(\"popupForm-project\").style.display = \"block\";  \n    });\n\n    const submitButtonProject = document.getElementById(\"submit-button-project\");\n    submitButtonProject.addEventListener(\"click\", (event) => {\n        event.preventDefault();\n        if (document.getElementById(\"project-name-input\").value == '') {\n            return alert('Please include project name');\n        };\n        let newProjectName = document.getElementById(\"project-name-input\").value;\n        document.getElementById(\"project-name-input\").value = '';\n        projectList.push(newProjectName);\n        (0,_display__WEBPACK_IMPORTED_MODULE_0__.reviseProjectList)(projectList);\n        document.getElementById(\"container\").style.display= \"grid\";\n        document.getElementById(\"blank\").style.height = \"0vh\";\n        document.getElementById(\"popupForm-project\").style.display = \"none\";\n    });\n\n    const cancelButtonProject = document.getElementById(\"cancel-button-project\");\n    cancelButtonProject.addEventListener(\"click\", () => {\n        document.getElementById(\"container\").style.display= \"grid\";\n        document.getElementById(\"blank\").style.height = \"0vh\";\n        document.getElementById(\"popupForm-project\").style.display = \"none\";\n    });\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/add-project.js?");

/***/ }),

/***/ "./src/modules/add-todo.js":
/*!*********************************!*\
  !*** ./src/modules/add-todo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeTodoForm\": () => (/* binding */ initializeTodoForm)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/modules/display.js\");\n\n\n\nfunction initializeTodoForm(theList) {\n    const addTodo = document.getElementById(\"add-button\");\n    addTodo.addEventListener(\"click\", () => {\n        document.getElementById(\"container\").style.display= \"none\";\n        document.getElementById(\"blank\").style.height = \"100vh\";\n        document.getElementById(\"popupForm\").style.display = \"block\";\n    });\n\n    const submitButton = document.getElementById(\"submit-button\");\n    submitButton.addEventListener(\"click\", (event) => {\n        event.preventDefault();\n        if ((document.getElementById(\"title\").value == '') ||  (document.getElementById(\"due-date\").value == '')) {\n            return alert('Please include todo title and due date');\n        };\n        let newProject = document.getElementById(\"project\").value;\n        document.getElementById(\"project\").value = '';\n        let newTitle = document.getElementById(\"title\").value;\n        document.getElementById(\"title\").value = '';\n        let newDescription = +document.getElementById(\"description\").value;\n        document.getElementById(\"description\").value = '';\n        let newDueDate = document.getElementById(\"due-date\").value;\n        document.getElementById(\"due-date\").value = '';\n        let newPriority = document.querySelector(\"#priority\").checked;\n        document.querySelector(\"#priority\").checked = false;\n        let newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.todoItem(newProject, newTitle, newDescription, newDueDate, newPriority);\n        theList.insertTodo(newTodo);\n        (0,_display__WEBPACK_IMPORTED_MODULE_1__.displayList)(theList.returnList());\n        document.getElementById(\"container\").style.display= \"grid\";\n        document.getElementById(\"blank\").style.height = \"0vh\";\n        document.getElementById(\"popupForm\").style.display = \"none\";\n    });\n\n    const cancelButton = document.getElementById(\"cancel-button\");\n    cancelButton.addEventListener(\"click\", () => {\n        document.getElementById(\"project\").value = '';\n        document.getElementById(\"title\").value = '';\n        document.getElementById(\"description\").value = '';\n        document.getElementById(\"due-date\").value = '';\n        document.querySelector(\"#priority\").checked = false;\n        document.getElementById(\"container\").style.display= \"grid\";\n        document.getElementById(\"blank\").style.height = \"0vh\";\n        document.getElementById(\"popupForm\").style.display = \"none\";\n    });\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/add-todo.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayList\": () => (/* binding */ displayList),\n/* harmony export */   \"reviseProjectList\": () => (/* binding */ reviseProjectList)\n/* harmony export */ });\nfunction displayList(lst) {\n    const contentArea = document.getElementById(\"items\");\n    contentArea.textContent = '';\n    lst.sort(function(a,b){return new Date(a.dueDate) - new Date(b.dueDate);});\n    for (let i = 0; i < lst.length; i++) {\n        let itemContainer = document.createElement('div');\n        itemContainer.className = \"item\";\n        let checkboxInput = document.createElement('input');\n        checkboxInput.type = \"checkbox\";\n        checkboxInput.class = \"checkbox\";\n        checkboxInput.name = \"checkbox\";\n        let infoDiv = document.createElement('div');\n        let titleDiv = document.createElement('div');\n        titleDiv.className = \"task-title\";\n        titleDiv.textContent = lst[i].title;\n        let dueDateDiv = document.createElement('div');\n        dueDateDiv.className = \"task-due-date\";\n        dueDateDiv.textContent = lst[i].dueDate;\n        infoDiv.appendChild(titleDiv);\n        infoDiv.appendChild(dueDateDiv);\n        let projectDiv = document.createElement('div');\n        projectDiv.className = \"task-project\";\n        if (lst[i].project != \"N/A\") {\n            projectDiv.textContent = lst[i].project;\n        } else {\n            projectDiv.textContent = \"\";\n        };\n        if (lst[i].priority == true) {\n            itemContainer.className = 'item urgent';\n        };\n        itemContainer.appendChild(checkboxInput);\n        itemContainer.appendChild(infoDiv);\n        itemContainer.appendChild(projectDiv);\n        contentArea.appendChild(itemContainer);\n    };\n};\n\nfunction reviseProjectList(projectList) {\n    const projectForm = document.getElementById(\"project\");\n    const projectSidebar = document.getElementById(\"project-list\");\n    projectForm.textContent = '';\n    projectSidebar.textContent = '';\n    projectList.sort();\n    for (let i = 0; i < projectList.length; i++) {\n        let projectOption = document.createElement('option');\n        projectOption.value = projectList[i];\n        projectOption.textContent = projectList[i];\n        projectForm.appendChild(projectOption);\n\n        if (projectList[i] != \"N/A\") {\n            let projectItem = document.createElement('div');\n            let projectItemSpan = document.createElement('span');\n            projectItem.className = \"project-list-item\";\n            projectItemSpan.textContent = projectList[i];\n            projectItem.appendChild(projectItemSpan);\n            projectSidebar.appendChild(projectItem);\n        };\n    };\n    document.getElementById(\"project\").value = '';\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoItem\": () => (/* binding */ todoItem),\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\nclass todoItem {\n    constructor(project, title, description, dueDate, priority) {\n        this.project = project;\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    };\n};\n\nclass todoList {\n    constructor() {\n        this.allTodoItems = [];\n    };\n\n    returnList() {\n        return this.allTodoItems;\n    };\n\n    insertTodo(item) {\n        this.allTodoItems.push(item);\n    };\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;