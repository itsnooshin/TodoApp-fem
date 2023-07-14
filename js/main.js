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
const filterList = document.querySelectorAll(".item");
// when user add a to do display it on list order

const completedTasks = [];
const mainDark = function (e) {
  if (e.key === "Enter") {
    const input = e.target.value;
    if (input.trim() !== "") {
      const html = `
      <div class="main__box--flex">
      <div class="main__box-item">
        <span class="main__box--check"></span>
        <p class="box__lists"></p>
      </div>
      <div class="btn--close"></div>
    </div>
      `;
      const text = e.target.value;

      for (let i = 0; i < containerList.length; i++) {
        const newElement = document.createElement("div");
        newElement.innerHTML = html;
        containerList[i].appendChild(newElement);
        const newItem = containerList[i].lastChild;
        const p = newItem.querySelector(".box__lists");
        p.classList.add("box__list");
        p.innerHTML = text;
        itemLeft.textContent = containerList[i].children.length;
        const checkList = newItem.querySelector(".main__box--check");
        //  when user click on span
        checkList.addEventListener("click", function () {
          checkList.classList.toggle("highlight");
          newElement.children[0].children[0].children[1].classList.toggle(
            "completed"
          );
         console.log(newElement);
          
          
        });

        e.target.value = ""; // for remove the item in new list


      }
    }
  }

  
};

// const completeTask = function (taskname) {
//   let completedTask = {
//     name: taskname,
//     completed: true,
//   };

 
//   completedTasks.push(completeTask);
//   console.log("Completed Tasks:" , completedTasks );
// };


const minLight = function () {
  document.body.classList.toggle("light-mode");
  result.classList.toggle("color-white-form");
  bcimg.classList.toggle("bcg-white");

  form.classList.toggle("main__form--alternate");
};

//addeventlistener
btnLight.addEventListener("click", minLight);
newList.addEventListener("keydown", mainDark);
