"use strict";
// create elements
const itemLeft = document.querySelector(".item-calcuted");
const btnLight = document.querySelector(".btn--lightdark");
const body = document.querySelector("body");
const form = document.querySelector(".main__form");
const bgimage = document.querySelector(".main__background");
const result = document.querySelector(".main__box-items");
const imgIcon = document.getElementById("imgplus");
const btnActive = document.querySelector(".item-active");
const btnAll = document.querySelector(".item-all");
const btnCompleted = document.querySelector(".item-done");
const btnClear = document.querySelector(".btn--clear");
const buttons = document.querySelectorAll(".item");
const addTodoInput = document.getElementById("add_todo_input"); //input for add a list
const todosContainer = document.getElementById("todos_box"); //container for todolist
const itemsCountElement = document.getElementById("itemsCount"); // calcuted the lists completed or not
const tododlists = [];

const createTodoList = function (todo) {
  todosContainer.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="main__box--flex">
        <div class="main__box-item" onClick="complateTodo(${todo.id})">
          <span class="main__box--check ${
            todo.completed ? "highlight" : ""
          }"></span>
          <p class="box__lists ${todo.completed ? "completed" : ""}">${
      todo.titleList
    }</p>
        </div>
        <div class="btn--close" onClick="deleteTodo(${todo.id})"></div>
      </div>
    `
  );
};

const calcutedTheTaskList = function () {
  const listItem = tododlists.filter((list) => !list.completed).length;
  itemLeft.innerHTML = listItem;
};

const createEachList = function () {
  todosContainer.innerHTML = "";
  tododlists.forEach((item) => {
    createTodoList(item);
  });
  calcutedTheTaskList();
};

const complateTodo = function (id) {
  const index = tododlists.findIndex((item) => item.id === id);
  if (index !== -1) {
    tododlists[index].completed = !tododlists[index].completed;

    createEachList();
  } else {
    console.log("no task");
  }
};
let previewbutton = null;
btnActive.addEventListener("click", function (e) {
  const itemnonCompleted = tododlists.filter(
    (item) => item.completed === false
  );

  e.target.classList.toggle("active");
  todosContainer.innerHTML = "";
  itemnonCompleted.forEach((item) => {
    createTodoList(item);
  });
});

btnCompleted.addEventListener("click", function (e) {
  const itemnonCompleted = tododlists.filter((item) => item.completed === true);
  todosContainer.innerHTML = "";
  itemnonCompleted.forEach((item) => {
    createTodoList(item);
  });
});

btnAll.addEventListener("click", function (e) {
  const allTask = tododlists.filter((item) => item);
  todosContainer.innerHTML = "";
  allTask.forEach((item) => {
    createTodoList(item);
  });
});

buttons.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (previewbutton) {
      previewbutton.style.color = "#5B5E7E";
    }
    previewbutton = e.target;
    e.target.style.color = "#3A7CFD";
  });
});

const deleteTodo = function (id) {
  const index = tododlists.findIndex((item) => item.id === id);
  if (index !== -1) {
    tododlists.splice(index, 1);
    createEachList();
  }
};

btnClear.addEventListener("click", function () {
  const itemnonCompleted = tododlists.filter((item) => item.completed === true);
  const index = itemnonCompleted.findIndex((item) => item.id);
  todosContainer.innerHTML = "";
  if (index !== -1) {
    tododlists.splice(index, 1);
    createEachList();
  }
});

addTodoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const items = {
      id: new Date().getTime(),
      titleList: event.target.value,
      completed: false,
    };
    tododlists.push(items);

    createTodoList(items);
    calcutedTheTaskList();

    event.target.value = "";
  }
});

// add light mode
btnLight.addEventListener("click", function () {
  if (imgIcon.getAttribute("src") === "./assests/imges/sun-fill.svg") {
    imgIcon.setAttribute("src", "./assests/imges/moon.svg");
  } else {
    imgIcon.setAttribute("src", "./assests/imges/sun-fill.svg");
  }
  body.classList.toggle("light-mode");
  result.classList.toggle("color-white-form");
  bgimage.classList.toggle("bcg-white");
  form.classList.toggle("main__form--alternate");
});
