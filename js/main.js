// create elements
"use strict";
const newList = document.querySelector(".main__form__input");
const containerList = document.querySelectorAll(".main__box-otherlist");
const checkList = document.getElementsByClassName("main__box--check");
const checkListParagh = document.getElementsByClassName("box__lists");
const buttonSpan = document.getElementById("mySpan");
const itemLeft = document.querySelector(".item-calcuted");
const btnClose = document.querySelectorAll(".btn--close");
const btnLight = document.querySelector(".btn--lightdark");

// when user add a to do display it on list order

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

      const newElement = document.createElement("div");
      newElement.innerHTML = html;
      containerList.forEach((element) => {
        element.appendChild(newElement);
        const newItem = element.lastChild;
        const p = newItem.querySelector(".box__lists");
        p.classList.add("box__list");
        const bodyElement = document.body;
        const computedStyle = window.getComputedStyle(bodyElement);
        const backgroundColor = computedStyle.backgroundColor;
        console.log(backgroundColor);

        p.innerHTML = text;
        itemLeft.textContent = element.children.length;

        const span = newItem.querySelector(".main__box--check");
        p.innerHTML = text;
        span.addEventListener("click", function (e) {
          p.classList.toggle("text-through");
          span.classList.toggle("highlight");
        });

        const btnClose = document.querySelectorAll(".btn--close");
        btnClose.forEach((el) => {
          el.addEventListener("click", function (e) {
            if (e.target) {
              element.removeChild(newElement);
              itemLeft.textContent = element.children.length;
            }
          });
        });
      });

      e.target.value = ""; // for remove the item in new list
    }
  }
};

newList.addEventListener("keydown", mainDark);

const body = document.querySelector("body");
const form = document.querySelector(".main__form");
const formElement = document.getElementById("formElement");
const bcimg = document.querySelector(".main__background");
const result = document.querySelector(".main__box-items");
const mainBox = document.querySelector(".main__box--flex");

const minLight = function () {
  document.body.classList.toggle("light-mode");
  result.classList.toggle("color-white-form");
  bcimg.classList.toggle("bcg-white");

  form.classList.toggle("main__form--alternate");
};

btnLight.addEventListener("click", minLight);
