// let boxEl = document.querySelector(".box");
// console.log(boxEl);

// let boxEl = document.getElementById("second-box");
// console.log(boxEl);

// classList
// let boxEl = document.querySelector(".box");
// boxEl.classList.add("active");
// console.log(boxEl.classList.contains("active"));
// boxEl.classList.remove("active");
// console.log(boxEl.classList.contains("active"));

// addEventListener
// document.querySelector(".box").addEventListener("click", function () {
//   alert("Add event listener");
// });

// let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click", function () {
//   if (boxEl.classList.contains("dark")) {
//     boxEl.classList.remove("dark");
//     boxEl.classList.add("white");
//   } else if (boxEl.classList.contains("white")) {
//     boxEl.classList.remove("white");
//     boxEl.classList.add("dark");
//   } else {
//     boxEl.classList.add("dark");
//   }
// });

// setAttribute
// let boxEl = document.querySelector(".box");
// let inputEl = document.getElementById("input");
// boxEl.addEventListener("click", function () {
//   // inputEl.setAttribute("placeholder", "통합검색");
//   // inputEl.setAttribute("type", "button");
//   inputEl.setAttribute("type", "password");
// });

// textContent
// let boxEl = document.querySelector(".box");
// boxEl.addEventListener("click", function () {
//   boxEl.textContent = "hi";
// });

// 실습3
// let boxEl = document.querySelector(".box");
// boxEl.addEventListener("click", function () {
//   if (boxEl.classList.contains("dark")) {
//     boxEl.classList.remove("dark");
//     boxEl.classList.add("white");
//   } else if (boxEl.classList.contains("white")) {
//     boxEl.classList.remove("white");
//     boxEl.classList.add("dark");
//   } else {
//     boxEl.classList.add("white");
//   }
// });
// let buttonEl = document.querySelector(".button");
// let inputEl = document.querySelector(".input");
// let textEl = document.querySelector(".text");
// let spanEl = document.querySelector("span");

// buttonEl.addEventListener("click", function () {
//   textEl.setAttribute("placeholder", "아이디를 입력하세요");
//   spanEl.textContent = "아이디를 입력하세요";
// });

// inputEl.addEventListener("click", function () {
//   const content = textEl.value;
//   spanEl.textContent = content;
// });

// querySelectorAll
// let boxEls = document.querySelectorAll(".box");
// console.log(boxEls);
// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`box_${index + 1}`);
// });
// console.log(boxEls);

// 실습4
let boxEls = document.querySelectorAll(".box");
let buttonEl = document.querySelector("input");
buttonEl.addEventListener("click", function () {
  boxEls.forEach(function (boxEl, index) {
    if (index % 7 == 0) {
      // boxEl.classList.add("box_1");
      // CSS에 직접 접근 가능
      boxEl.style.backgroundColor = "red";
    } else if (index % 7 == 1) {
      // boxEl.classList.add("box_2");
      boxEl.style.backgroundColor = "orange";
    } else if (index % 7 == 2) {
      // boxEl.classList.add("box_3");
      boxEl.style.backgroundColor = "yellow";
    } else if (index % 7 == 3) {
      // boxEl.classList.add("box_4");
      boxEl.style.backgroundColor = "green";
    } else if (index % 7 == 4) {
      // boxEl.classList.add("box_5");
      boxEl.style.backgroundColor = "blue";
    } else if (index % 7 == 5) {
      // boxEl.classList.add("box_6");
      boxEl.style.backgroundColor = "navy";
    } else if (index % 7 == 6) {
      // boxEl.classList.add("box_7");
      boxEl.style.backgroundColor = "purple";
    }
    // boxEl.classList.add(`box_${index + 1}`);
  });
});
