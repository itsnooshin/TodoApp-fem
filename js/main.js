// create elements
"use strict";
const newList = document.querySelector(".main__form__input");
const containerList = document.querySelector(".main__box-otherlist");
const checkList = document.getElementsByClassName("main__box--check");
const checkListParagh = document.getElementsByClassName("box__lists");
const buttonSpan = document.getElementById("mySpan");

// when user add a to do display it on list order
newList.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    console.log(e.target.typeof === "input");
    const html = `
    <div class="main__box-item">
      <span class="main__box--check"></span>
      <p class="box__lists">${e.target.value}</p>
  </div>`;

    containerList.insertAdjacentHTML("afterbegin", html);

    e.target.value = "";
    let select = null;
    for (let i = 0; i < checkList.length; i++) {
      checkList[i].addEventListener("click", function (e) {
       
        console.log(e.target);

         if(!checkListParagh[i].classList.contains('text-through')){
          checkListParagh[i].classList.add("text-through");
         }
        // else{
          
        // }
        
        // select = checkListParagh[i];
      });
    }

  
  }
});
