let TODOS = [];

const todoCount = document.querySelector("#todo-count");
const todoForm = document.querySelector("#todoForm");

todoCount.textContent = TODOS.length + " tasks";

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
   };

   TODOS = [...TODOS, newTask];

   renderTasks();
}

function removeTask(taskId) {
   TODOS = TODOS.filter((task) => task._id !== taskId);
   renderTasks();
}

function doneTaskHandler(taskId) {
   TODOS = TODOS.map((element) =>
      element._id === taskId
         ? { ...element, completed: !element.completed }
         : element
   );

   renderTasks();
}

function markTaskHandler(taskId) {
   TODOS = TODOS.map((element) =>
      element._id === taskId ? { ...element, mark: !element.mark } : element
   );

   renderTasks();
}

function renderTasks() {
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

      timeTag.textContent = time();
      doneBtnTag.textContent = "done";
      unDoneTag.textContent = "unDone";
      markTag.textContent = "mark";
      unMarkTag.textContent = "unMark";
      trashTag.textContent = "trash";

      liTag.textContent = `${element.name} - `;

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

      todoList.appendChild(liTag);

      trashTag.addEventListener("click", () => removeTask(element._id));
      doneBtnTag.addEventListener("click", () => doneTaskHandler(element._id));
      unDoneTag.addEventListener("click", () => doneTaskHandler(element._id));
      markTag.addEventListener("click", () => markTaskHandler(element._id));
      unMarkTag.addEventListener("click", () => markTaskHandler(element._id));
   });
}

renderTasks();

todoForm.addEventListener("submit", (e) => {
   e.preventDefault();

   addTask(e);
   todoForm.reset();
});

setInterval(time, 1000);
time();
date();
