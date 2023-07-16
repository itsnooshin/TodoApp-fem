"use strict";
// create elements
const newList = document.querySelector(".main__form__input");
const containerList = document.querySelectorAll(".main__box-otherlist");
const checkListParagh = document.getElementsByClassName("box__lists");
const buttonSpan = document.getElementById("mySpan");
const itemLeft = document.querySelector(".item-calcuted");
const btnClose = document.querySelectorAll(".btn--close");
const btnLight = document.querySelector(".btn--lightdark");
const body = document.querySelector("body");
const form = document.querySelector(".main__form");
const formElement = document.getElementById("formElement");
const bcimg = document.querySelector(".main__background");
const result = document.querySelector(".main__box-items");
const btnlight = document.querySelector(".btn--lightdark");
// when user add a to do display it on list order

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
      todo.title
    }</p>
        </div>
        <div class="btn--close" onClick="deleteTodo(${todo.id})"></div>
      </div>
    `
  );
};

// calcuted when the list item is not clicked
const calcutedItemLeft = function () {
  itemLeft.innerHTML = tododlists.filter((list) => !list.completed).length;
};

const createEachlist = function () {
  todosContainer.innerHTML = "";
  tododlists.forEach((item) => {
    createTodoList(item);
  });
  calcutedItemLeft();
};
const complateTodo = function (id) {
  const index = tododlists.findIndex((item) => item.id === id);

  if (index !== -1) {
    tododlists[index].completed = !tododlists[index].completed;
    createEachlist();
  }
};

// item-active
const activeButton = document.querySelector(".item-active");
const allButton = document.querySelector(".item-all");
const completedButton = document.querySelector(".item-done");
const clearComplete = document.querySelector(".btn--clear");
const all = document.querySelectorAll(".item");

// ative button

allButton.addEventListener("click", function () {
  const alltask = tododlists.map((item) => item);
  todosContainer.innerHTML = "";
  alltask.forEach((el) => {
    createTodoList(el);
  });
});

activeButton.addEventListener("click", function () {
  const nonComplete = tododlists.filter((item) => !item.completed);
  todosContainer.innerHTML = "";

  nonComplete.forEach((el) => {
    createTodoList(el);
  });
});

// completed button

completedButton.addEventListener("click", function () {
  const Complete = tododlists.filter((item) => item.completed);
  todosContainer.innerHTML = "";
  Complete.forEach((el) => {
    createTodoList(el);
  });
});

clearComplete.addEventListener("click", function () {
  const Complete = tododlists.filter((item) => item.completed);
  const index = Complete.findIndex((item) => item.id);
  todosContainer.innerHTML = "";
  tododlists.splice(index, 1);
});
// if the user want to delete the task
const deleteTodo = function (id) {
  const index = tododlists.findIndex((item) => item.id === id);
  console.log(index);
  if (index !== -1) {
    tododlists.splice(index, 1);
    createEachlist();
  }
};

// when the user type something on type input
addTodoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const item = {
      id: new Date().getTime(),
      title: event.target.value,
      completed: false,
    };

    tododlists.push(item); // all item added to items
    createTodoList(item); // for adjentHtml context
    calcutedItemLeft(); // for calcute the item left

    event.target.value = ""; // empty the input when user type something
  }
});

// add light mode
btnlight.addEventListener("click", function () {
  body.classList.toggle("light-mode");
  result.classList.toggle("color-white-form");
  bcimg.classList.toggle("bcg-white");
  form.classList.toggle("main__form--alternate");
  // btnLight.classList.toggle("light-mode");
});
