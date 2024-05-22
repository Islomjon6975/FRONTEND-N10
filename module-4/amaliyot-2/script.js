let TODOS = JSON.parse(localStorage.getItem("todo")) || [];

const todoCount = document.querySelector("#todo-count");
const todoForm = document.querySelector("#todoForm");
const clearAllItem = document.querySelector("#clear-all");

todoCount.textContent = TODOS.length + " tasks";

function setToLocalStorage() {
   localStorage.setItem("todo", JSON.stringify(TODOS));
}

function clearAll() {
   localStorage.clear();
   TODOS = [];
   renderTasks();
}

function date() {
   const date = document.querySelector("#date");
   const day = new Date().getDate();
   const month = new Date().getMonth();
   const year = new Date().getFullYear();
   const weakDay = new Date().getDay();
   const weekDays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
   ];

   date.textContent = `Date: ${day}.${month}.${year} ${weekDays[weakDay - 1]}`;
}

function time() {
   const time = document.querySelector("#time");
   const hours = new Date().getHours().toString().padStart(2, "0");
   const minutes = new Date().getMinutes().toString().padStart(2, "0");
   const seconds = new Date().getSeconds().toString().padStart(2, "0");

   time.textContent = `Time: ${hours}:${minutes}:${seconds} ${
      hours > 12 ? "PM" : "AM"
   }`;

   return `${hours}:${minutes}`;
}

function addTask(e) {
   const taskName = e.target.elements["todo"].value;

   const newTask = {
      _id: TODOS.length + 1,
      name: taskName,
      completed: false,
      mark: false,
      time: time(),
      edit: false,
   };

   TODOS = [...TODOS, newTask];

   setToLocalStorage();
   renderTasks();
}

function removeTask(taskId) {
   TODOS = TODOS.filter((task) => task._id !== taskId);

   setToLocalStorage();
   renderTasks();
}

function doneTaskHandler(taskId) {
   TODOS = TODOS.map((element) =>
      element._id === taskId
         ? { ...element, completed: !element.completed }
         : element
   );

   setToLocalStorage();
   renderTasks();
}

function markTaskHandler(taskId) {
   TODOS = TODOS.map((element) =>
      element._id === taskId ? { ...element, mark: !element.mark } : element
   );

   setToLocalStorage();
   renderTasks();
}

function editTaskHandler(taskId) {
   TODOS = TODOS.map((element) =>
      element._id === taskId ? { ...element, edit: true } : element
   );

   setToLocalStorage();
   renderTasks();
}

function saveTaskHandler(taskId) {
   const editedInput = document.querySelector("#edit-input");

   if (!editedInput.value.length) {
      editedInput.classList.toggle("shake");
      // alert("Input should not be empty");

      setTimeout(function () {
         editedInput.classList.remove("shake");
      }, 500);

      return;
   }

   TODOS = TODOS.map((element) =>
      element._id === taskId
         ? { ...element, name: editedInput.value, edit: false }
         : element
   );

   setToLocalStorage();
   renderTasks();
}

function renderTasks() {
   todoCount.textContent = TODOS.length + " tasks";

   const todoList = document.querySelector("#todo-list");
   todoList.innerHTML = "";

   TODOS.forEach((element) => {
      const liTag = document.createElement("li");
      const timeTag = document.createElement("time");
      const doneBtnTag = document.createElement("button");
      const unDoneTag = document.createElement("button");
      const markTag = document.createElement("button");
      const unMarkTag = document.createElement("button");
      const trashTag = document.createElement("button");
      const editTag = document.createElement("button");
      const saveTag = document.createElement("button");
      const inputEditTag = document.createElement("input");

      timeTag.textContent = time();
      doneBtnTag.textContent = "done";
      unDoneTag.textContent = "unDone";
      markTag.textContent = "mark";
      unMarkTag.textContent = "unMark";
      trashTag.textContent = "trash";
      editTag.textContent = "Edit";
      saveTag.textContent = "Save";

      if (element.edit) {
         inputEditTag.type = "text";
         inputEditTag.id = "edit-input";
         inputEditTag.value = element.name;
         liTag.appendChild(inputEditTag);
      } else {
         liTag.textContent = `${element.name} - `;
      }

      if (element.completed) {
         liTag.style.color = "green";
         liTag.style.textDecoration = "line-through";
      }

      if (element.mark) {
         liTag.style.backgroundColor = "yellow";
      }

      liTag.appendChild(timeTag);
      element.completed
         ? liTag.appendChild(unDoneTag)
         : liTag.appendChild(doneBtnTag);
      element.mark ? liTag.appendChild(unMarkTag) : liTag.appendChild(markTag);
      liTag.appendChild(trashTag);
      element.edit ? liTag.appendChild(saveTag) : liTag.appendChild(editTag);

      todoList.appendChild(liTag);

      trashTag.addEventListener("click", () => removeTask(element._id));
      doneBtnTag.addEventListener("click", () => doneTaskHandler(element._id));
      unDoneTag.addEventListener("click", () => doneTaskHandler(element._id));
      markTag.addEventListener("click", () => markTaskHandler(element._id));
      unMarkTag.addEventListener("click", () => markTaskHandler(element._id));
      editTag.addEventListener("click", () => editTaskHandler(element._id));
      saveTag.addEventListener("click", () => saveTaskHandler(element._id));
   });
}

renderTasks();

todoForm.addEventListener("submit", (e) => {
   e.preventDefault();

   addTask(e);
   todoForm.reset();
});

clearAllItem.addEventListener("click", clearAll);

setInterval(time, 1000);
time();
date();
setToLocalStorage();
