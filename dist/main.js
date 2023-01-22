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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _modules_add_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add-todo */ \"./src/modules/add-todo.js\");\n/* harmony import */ var _modules_add_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/add-project */ \"./src/modules/add-project.js\");\n/* harmony import */ var _modules_change_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/change-filter */ \"./src/modules/change-filter.js\");\n/* harmony import */ var _modules_view_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/view-todo */ \"./src/modules/view-todo.js\");\n\n\n\n\n\n\n\nlet theList = new _modules_todo__WEBPACK_IMPORTED_MODULE_1__.todoList();\n(0,_modules_display__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(theList);\n(0,_modules_add_todo__WEBPACK_IMPORTED_MODULE_2__.initializeTodoForm)(theList);\n(0,_modules_add_project__WEBPACK_IMPORTED_MODULE_3__.initializeProjectForm)(theList);\n(0,_modules_change_filter__WEBPACK_IMPORTED_MODULE_4__.initializeFilters)(theList);\n(0,_modules_view_todo__WEBPACK_IMPORTED_MODULE_5__.initializeViewTodo)(theList);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-project.js":
/*!************************************!*\
  !*** ./src/modules/add-project.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeProjectForm\": () => (/* binding */ initializeProjectForm)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/modules/display.js\");\n\n\nfunction initializeProjectForm(lst) {\n    const addProjectButton = document.getElementById(\"projects-container\");\n    addProjectButton.addEventListener(\"click\", () => {\n        document.getElementById(\"container\").style.display= \"none\";\n        document.getElementById(\"blank\").style.height = \"100vh\";\n        document.getElementById(\"popupForm-project\").style.display = \"block\";  \n    });\n\n    const submitButtonProject = document.getElementById(\"submit-button-project\");\n    submitButtonProject.addEventListener(\"click\", (event) => {\n        event.preventDefault();\n        if (document.getElementById(\"project-name-input\").value == '') {\n            return alert('Please include project name');\n        };\n        let newProjectName = document.getElementById(\"project-name-input\").value;\n        document.getElementById(\"project-name-input\").value = '';\n        lst.insertProject(newProjectName);\n        (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(lst);\n        document.getElementById(\"container\").style.display= \"grid\";\n        document.getElementById(\"blank\").style.height = \"0vh\";\n        document.getElementById(\"popupForm-project\").style.display = \"none\";\n    });\n\n    const cancelButtonProject = document.getElementById(\"cancel-button-project\");\n    cancelButtonProject.addEventListener(\"click\", () => {\n        document.getElementById(\"container\").style.display= \"grid\";\n        document.getElementById(\"blank\").style.height = \"0vh\";\n        document.getElementById(\"popupForm-project\").style.display = \"none\";\n    });\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/add-project.js?");

/***/ }),

/***/ "./src/modules/add-todo.js":
/*!*********************************!*\
  !*** ./src/modules/add-todo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeTodoForm\": () => (/* binding */ initializeTodoForm)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/modules/display.js\");\n\n\n\nfunction initializeTodoForm(theList) {\n    document.getElementById(\"project\").value = '';\n    document.getElementById(\"title\").value = '';\n    document.getElementById(\"description\").value = '';\n    document.getElementById(\"due-date\").value = '';\n    document.querySelector(\"#priority\").checked = false;\n\n\n    const addTodo = document.getElementById(\"add-button\");\n    addTodo.addEventListener(\"click\", () => {\n        document.getElementById(\"container\").style.display= \"none\";\n        document.getElementById(\"blank\").style.height = \"100vh\";\n        document.getElementById(\"popupForm\").style.display = \"block\";\n    });\n\n    const submitButton = document.getElementById(\"submit-button\");\n    submitButton.addEventListener(\"click\", (event) => {\n        event.preventDefault();\n        if ((document.getElementById(\"title\").value == '') ||  (document.getElementById(\"due-date\").value == '')) {\n            return alert('Please include todo title and due date');\n        };\n        let newProject = document.getElementById(\"project\").value;\n        document.getElementById(\"project\").value = '';\n        let newTitle = document.getElementById(\"title\").value;\n        document.getElementById(\"title\").value = '';\n        let newDescription = document.getElementById(\"description\").value;\n        document.getElementById(\"description\").value = '';\n        let newDueDate = document.getElementById(\"due-date\").value;\n        document.getElementById(\"due-date\").value = '';\n        let newPriority = document.querySelector(\"#priority\").checked;\n        document.querySelector(\"#priority\").checked = false;\n        let newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.todoItem(newProject, newTitle, newDescription, newDueDate, newPriority);\n        theList.insertTodo(newTodo);\n        (0,_display__WEBPACK_IMPORTED_MODULE_1__.displayList)(theList.returnList());\n        document.getElementById(\"container\").style.display= \"grid\";\n        document.getElementById(\"blank\").style.height = \"0vh\";\n        document.getElementById(\"popupForm\").style.display = \"none\";\n    });\n\n    const cancelButton = document.getElementById(\"cancel-button\");\n    cancelButton.addEventListener(\"click\", () => {\n        document.getElementById(\"project\").value = '';\n        document.getElementById(\"title\").value = '';\n        document.getElementById(\"description\").value = '';\n        document.getElementById(\"due-date\").value = '';\n        document.querySelector(\"#priority\").checked = false;\n        document.getElementById(\"container\").style.display= \"grid\";\n        document.getElementById(\"blank\").style.height = \"0vh\";\n        document.getElementById(\"popupForm\").style.display = \"none\";\n    });\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/add-todo.js?");

/***/ }),

/***/ "./src/modules/change-filter.js":
/*!**************************************!*\
  !*** ./src/modules/change-filter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeFilters\": () => (/* binding */ initializeFilters),\n/* harmony export */   \"setFilterToProject\": () => (/* binding */ setFilterToProject)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/modules/display.js\");\n\n\nfunction initializeFilters(lst) {\n    const filterDisplay = document.getElementById('filter');\n    const all = document.getElementById('all');\n    all.addEventListener(\"click\", () => {\n        filterDisplay.textContent = '';\n        let allDiv = document.createElement('div');\n        allDiv.id = 'filter-text'\n        allDiv.textContent = 'All';\n        filterDisplay.appendChild(allDiv);\n        (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayList)(lst.returnList());\n    });\n\n    const today = document.getElementById('today');\n    today.addEventListener(\"click\", () => {\n        filterDisplay.textContent = '';\n        let todayDiv = document.createElement('div');\n        todayDiv.id = 'filter-text'\n        todayDiv.textContent = 'Today';\n        filterDisplay.appendChild(todayDiv);\n        (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayList)(lst.returnList());\n    });\n\n    const week = document.getElementById('week');\n    week.addEventListener(\"click\", () => {\n        filterDisplay.textContent = '';\n        let weekDiv = document.createElement('div');\n        weekDiv.id = 'filter-text'\n        weekDiv.textContent = 'Week';\n        filterDisplay.appendChild(weekDiv);\n        (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayList)(lst.returnList());\n    });\n};\n\nfunction setFilterToProject(lst, project) {\n    const filterDisplay = document.getElementById('filter');\n    filterDisplay.textContent = '';\n    let projectDiv = document.createElement('div');\n    projectDiv.id = 'filter-text'\n    projectDiv.textContent = project;\n    filterDisplay.appendChild(projectDiv);\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayList)(lst.returnList());\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/change-filter.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayList\": () => (/* binding */ displayList),\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects)\n/* harmony export */ });\n/* harmony import */ var _change_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-filter */ \"./src/modules/change-filter.js\");\n/* harmony import */ var _view_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-todo */ \"./src/modules/view-todo.js\");\n\n\n\nfunction displayList(lst) {\n    const contentArea = document.getElementById(\"items\");\n    contentArea.textContent = '';\n    if (lst.length > 1) {\n        lst.sort(function(a,b){return new Date(a.dueDate) - new Date(b.dueDate);});\n    };\n    const currentFilter = document.getElementById('filter-text').textContent;\n    if (lst.length > 0) {\n        if (!(arguments[1] == undefined)) {\n            lst = lst.filter(d => {\n                return (d.project == arguments[1]);\n            });\n        }\n        else if (currentFilter == \"Today\") {\n            let currentDate = new Date();\n            lst = lst.filter(d => {\n                let day = d.dueDate.substring(8,10);\n                let month = d.dueDate.substring(5,7);\n                let year = d.dueDate.substring(0,4);\n                return ((currentDate.getDate() == +day) && (currentDate.getMonth() == +month-1) && (currentDate.getFullYear() == +year));\n            });\n        } else if (currentFilter == \"Week\") {\n            const oneWeekMilliseconds = 6.048e+8\n            let currentDate = new Date();\n            let currentDay = currentDate.getDate();\n            let currentMonth = currentDate.getMonth();\n            let currentYear = currentDate.getFullYear();\n            currentDate = new Date(currentYear, currentMonth, currentDay).getTime();\n            let oneWeekAheadDate = new Date(currentDate + oneWeekMilliseconds).getTime();\n            lst = lst.filter(d => {\n                let day = d.dueDate.substring(8,10);\n                let month = d.dueDate.substring(5,7);\n                let year = d.dueDate.substring(0,4);\n                let time = new Date(+year, +month-1, +day).getTime();\n                return ((currentDate <= time) && (oneWeekAheadDate >= time));\n            });\n        };\n    };\n    for (let i = 0; i < lst.length; i++) {\n        let itemContainer = document.createElement('div');\n        itemContainer.className = \"item\";\n        let checkboxInput = document.createElement('input');\n        checkboxInput.type = \"checkbox\";\n        checkboxInput.class = \"checkbox\";\n        checkboxInput.name = \"checkbox\";\n        let infoDiv = document.createElement('div');\n        infoDiv.addEventListener(\"click\", () => {\n            (0,_view_todo__WEBPACK_IMPORTED_MODULE_1__.viewDetails)(lst[i]);\n        });\n        let titleDiv = document.createElement('div');\n        titleDiv.className = \"task-title\";\n        titleDiv.textContent = lst[i].title;\n        let dueDateDiv = document.createElement('div');\n        dueDateDiv.className = \"task-due-date\";\n        dueDateDiv.textContent = lst[i].dueDate;\n        infoDiv.appendChild(titleDiv);\n        infoDiv.appendChild(dueDateDiv);\n        let projectDiv = document.createElement('div');\n        projectDiv.className = \"task-project\";\n        if (lst[i].project != \"N/A\") {\n            projectDiv.textContent = lst[i].project;\n        } else {\n            projectDiv.textContent = \"\";\n        };\n        if (lst[i].priority == true) {\n            itemContainer.className = 'item urgent';\n        };\n        itemContainer.appendChild(checkboxInput);\n        itemContainer.appendChild(infoDiv);\n        itemContainer.appendChild(projectDiv);\n        contentArea.appendChild(itemContainer);\n    };\n};\n\nfunction displayProjects(lst) {\n    const projectForm = document.getElementById(\"project\");\n    const projectSidebar = document.getElementById(\"project-list\");\n    projectForm.textContent = '';\n    projectSidebar.textContent = '';\n    lst.sortProjects();\n    for (let i = 0; i < lst.returnProjects().length; i++) {\n        let projectOption = document.createElement('option');\n        projectOption.value = lst.returnProjects()[i];\n        projectOption.textContent = lst.returnProjects()[i];\n        projectForm.appendChild(projectOption);\n        if (lst.returnProjects()[i] != \"N/A\") {\n            let projectItem = document.createElement('div');\n            let projectItemSpan = document.createElement('span');\n            projectItem.className = \"project-list-item\";\n            projectItemSpan.textContent = lst.returnProjects()[i];\n            projectItem.addEventListener(\"click\", () => {\n                (0,_change_filter__WEBPACK_IMPORTED_MODULE_0__.setFilterToProject)(lst, lst.returnProjects()[i]);\n                displayList(lst.returnList(), lst.returnProjects()[i]);\n            });\n            projectItem.appendChild(projectItemSpan);\n            projectSidebar.appendChild(projectItem);\n        };\n    };\n    document.getElementById(\"project\").value = '';\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoItem\": () => (/* binding */ todoItem),\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\nclass todoItem {\n    constructor(project, title, description, dueDate, priority) {\n        this.project = project;\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    };\n};\n\nclass todoList {\n    constructor() {\n        this.allTodoItems = [];\n        this.allProjects = [\"N/A\"];\n    };\n\n    returnList() {\n        return this.allTodoItems;\n    };\n\n    insertTodo(item) {\n        this.allTodoItems.push(item);\n    };\n\n    returnProjects() {\n        return this.allProjects;\n    };\n\n    insertProject(project) {\n        this.allProjects.push(project);\n    };\n\n    sortProjects() {\n        this.allProjects.sort();\n    };\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/todo.js?");

/***/ }),

/***/ "./src/modules/view-todo.js":
/*!**********************************!*\
  !*** ./src/modules/view-todo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeViewTodo\": () => (/* binding */ initializeViewTodo),\n/* harmony export */   \"viewDetails\": () => (/* binding */ viewDetails)\n/* harmony export */ });\n\nfunction initializeViewTodo(lst) {\n    const submit_edit_buttons = document.getElementById(\"buttons-todo-edit-submit\");\n    submit_edit_buttons.style.display = 'none';\n    const edit_buttons = document.getElementById('buttons-todo-edit');\n\n    const edit = document.getElementById('edit-button-todo-detail');\n    edit.addEventListener(\"click\", () => {\n        submit_edit_buttons.style.display = 'block';\n        edit_buttons.style.display = 'none';\n        \n        let project = document.getElementById(\"todo-project-info\");\n        let title = document.getElementById(\"todo-title-info\");\n        let description = document.getElementById(\"todo-description-info\");\n        let date = document.getElementById(\"todo-date-info\");\n        let priority = document.getElementById(\"todo-priority-info\");\n\n        let projectText = project.textContent;\n        let titleText = title.textContent;\n        let descriptionText = description.textContent;\n        let dateText = date.textContent;\n        let priorityText = priority.textContent;\n\n        let projectForm = document.createElement('form');\n        project.textContent = '';\n        let projectEdit = document.createElement('select');\n        projectEdit.id = 'project-edit';\n        for (let i = 0; i < lst.returnProjects().length; i++){\n            let projectOption = document.createElement('option');\n            projectOption.value = lst.returnProjects()[i];\n            projectOption.textContent = lst.returnProjects()[i];\n            projectEdit.appendChild(projectOption);\n        };\n        projectEdit.name = 'project-edited'\n        projectEdit.value = projectText;\n        projectForm.appendChild(projectEdit);\n        project.appendChild(projectForm);\n        let titleForm = document.createElement('form');\n        title.textContent = '';\n        let titleEdit = document.createElement('input');\n        titleEdit.id = 'title-edit';\n        titleEdit.type = 'text';\n        titleEdit.name = 'title-edited'\n        titleEdit.value = titleText;\n        titleForm.appendChild(titleEdit);\n        title.appendChild(titleForm);\n        let descriptionForm = document.createElement('form');\n        description.textContent = '';\n        let descriptionEdit = document.createElement('textarea');\n        descriptionEdit.id = 'description-edit';\n        descriptionEdit.name = 'description-edited'\n        descriptionEdit.value = descriptionText;\n        descriptionEdit.rows = \"4\";\n        descriptionEdit.cols = \"25\";\n        descriptionForm.appendChild(descriptionEdit);\n        description.appendChild(descriptionForm);\n        let dateForm = document.createElement('form');\n        date.textContent = '';\n        let dateEdit = document.createElement('input');\n        dateEdit.id = 'date-edit';\n        dateEdit.type = 'date';\n        dateEdit.name = 'date-edited'\n        dateEdit.value = dateText;\n        dateForm.appendChild(dateEdit);\n        date.appendChild(dateForm);\n        let priorityForm = document.createElement('form');\n        priority.textContent = '';\n        let priorityEdit = document.createElement('input');\n        priorityEdit.id = 'priority-edit';\n        priorityEdit.type = 'checkbox';\n        priorityEdit.name = 'priority-edited'\n        priorityEdit.checked = priorityText;\n        priorityForm.appendChild(priorityEdit);\n        priority.appendChild(priorityForm);\n    });\n    const close = document.getElementById('close-button-todo-detail');\n    close.addEventListener(\"click\", () => {\n        document.getElementById(\"todo-project\").textContent = '';\n        document.getElementById(\"todo-title\").textContent = '';\n        document.getElementById(\"todo-description\").textContent = '';\n        document.getElementById(\"todo-date\").textContent = '';\n        document.getElementById(\"todo-priority\").textContent = '';\n        document.getElementById(\"container\").style.display= \"grid\";\n        document.getElementById(\"blank\").style.height = \"0vh\";\n        document.getElementById(\"popupForm-todo-detail\").style.display = \"none\";\n    });\n\n    const submit_edit = document.getElementById(\"submit-button-todo-detail\");\n    submit_edit.addEventListener(\"click\", () => {\n        submit_edit_buttons.style.display = 'none';\n        edit_buttons.style.display = 'block';\n    });\n\n    const cancel_edit = document.getElementById(\"cancel-button-todo-detail\");\n    cancel_edit.addEventListener(\"click\", () => {\n        submit_edit_buttons.style.display = 'none';\n        edit_buttons.style.display = 'block';\n    });\n}\n\nfunction viewDetails(todo) {\n    document.getElementById(\"container\").style.display= \"none\";\n    document.getElementById(\"blank\").style.height = \"100vh\";\n    document.getElementById(\"popupForm-todo-detail\").style.display = \"block\";\n\n    let projectContainer = document.getElementById(\"todo-project\");\n    let titleContainer = document.getElementById(\"todo-title\");\n    let descriptionContainer = document.getElementById(\"todo-description\");\n    let dateContainer = document.getElementById(\"todo-date\");\n    let priorityContainer = document.getElementById(\"todo-priority\");\n\n    let projectHeader = document.createElement(\"div\");\n    projectHeader.id = \"todo-project-header\"\n    projectHeader.textContent = 'Project';\n    let titleHeader = document.createElement(\"div\");\n    titleHeader.id = \"todo-title-header\"\n    titleHeader.textContent = 'Title';\n    let descriptionHeader = document.createElement(\"div\");\n    descriptionHeader.id = \"todo-description-header\"\n    descriptionHeader.textContent = 'Description';\n    let dateHeader = document.createElement(\"div\");\n    dateHeader.id = \"todo-date-header\"\n    dateHeader.textContent = 'Date';\n    let priorityHeader = document.createElement(\"div\");\n    priorityHeader.id = \"todo-priority-header\"\n    priorityHeader.textContent = 'Priority';\n\n    let projectInfo = document.createElement('div');\n    projectInfo.id = \"todo-project-info\"\n    projectInfo.textContent = todo.project;\n    let titleInfo = document.createElement(\"div\");\n    titleInfo.id = \"todo-title-info\"\n    titleInfo.textContent = todo.title;\n    let descriptionInfo = document.createElement(\"div\");\n    descriptionInfo.id = \"todo-description-info\"\n    descriptionInfo.textContent = todo.description;\n    let dateInfo = document.createElement(\"div\");\n    dateInfo.id = \"todo-date-info\"\n    dateInfo.textContent = todo.dueDate;\n    let priorityInfo = document.createElement(\"div\");\n    priorityInfo.id = \"todo-priority-info\"\n    priorityInfo.textContent = todo.priority;\n\n    projectContainer.appendChild(projectHeader);\n    projectContainer.appendChild(projectInfo);\n    titleContainer.appendChild(titleHeader);\n    titleContainer.appendChild(titleInfo);\n    descriptionContainer.appendChild(descriptionHeader);\n    descriptionContainer.appendChild(descriptionInfo);\n    dateContainer.appendChild(dateHeader);\n    dateContainer.appendChild(dateInfo);\n    priorityContainer.appendChild(priorityHeader);\n    priorityContainer.appendChild(priorityInfo);\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/view-todo.js?");

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