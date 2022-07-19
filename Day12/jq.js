// $("span").remove();

// function showValue() {
//   // console.log($("input").val());

//   // input요소 abcde로 바꿔주기
//   // querySelector는 첫번째 요소만, jquery는 모든요소
//   // querySelectorAll과 다른 점은 for문이나 forEach를 안해도 된다는 것
//   // $("input").val("abcde");

//   //
// }

// span요소 abcde로 바꿔주기
// $("span").text("abcde");
// document.querySelector("span").textContent = "abcde";

// 실습1 js
// const input = document.querySelector("input");
// const print = document.querySelector(".item1");
// const update = document.querySelector(".item2");
// const spanEl = document.querySelector("span");

// update.addEventListener("click", function () {
//   input.value = "가나다라마바사";
// });

// // print.addEventListener("click", function () {
// //   spanEl.textContent = input.value;
// // });

// // print.addEventListener말고 다른 방법(함수 선언, onclick)
// function changeSpan() {
//   spanEl.textContent = input.value;
// }

// 실습1 jq
// on = addEventListener
// $(".item2").on("click", function () {
//   $(".input-text").val("가나다라마바사");
// });
// $(".item1").on("click", function () {
//   $("span").text($(".input-text").val());
// });

// jquery로 속성 변경하기
// $(".input-text").on("click", function () {
//   $(".input-text").attr("type", "button");
//   $(".input-text").attr("value", "button");
// });

// 실습2 js
// const input = document.querySelector(".input-text");
// const btn1 = document.querySelector(".item1");
// const btn2 = document.querySelector(".item2");

// btn1.addEventListener("click", function () {
//   input.setAttribute("placeholder", "변경1을 누르셨습니다.");
// });

// btn2.addEventListener("click", function () {
//   input.setAttribute("type", "radio");
// });

// 실습2 jq
// $(".item1").on("click", function () {
//   $(".input-text").attr("placeholder", "변경1을 누르셨습니다.");
// });
// $(".item2").on("click", function () {
//   $(".input-text").attr("type", "radio");
// });

// jq로 css 고치기
// $("div").css("background-color", "orange");
// js로 css 고치기
// document.querySelector("div").style.backgroundColor = "skyblue";
// document.querySelector("div").style = "background-color: skyblue";

// 실습3
// const divEl = document.querySelector("div");
// const btn1 = document.querySelector(".btn1");
// btn1.addEventListener("click", function () {
//   divEl.style = "background-color: #ff00a0";
// });
// $(".btn2").on("click", function () {
//   $("div").css("background-color", "#19309e");
// });

// HTML에 삽입
// js의 innerHTML과 같음
// $("p").html("<h1>hi world</h1>");
// document.querySelector("p").innerHTML("<h1>hi world</h1>");

// 요소 추가
// const li = document.createElement("li");
// li.textContent = "+";
// li.style.color = "#ff00a0";
// $(".me").before(li);
// $(".me").after(li);

// 실습4
// const input = document.querySelector(".input-text");
// const btn1 = document.querySelector(".btn");
// const btn2 = document.querySelector(".btn2");
// const list = document.querySelector("ul");

// btn1.addEventListener("click", function () {
//   const li = document.createElement("li");
//   li.textContent = input.value;
//   li.style.color = "#19309e";
//   list.append(li);
//   input.value = "";
// });
// btn2.addEventListener("click", function () {
//   const li = document.createElement("li");
//   li.textContent = input.value;
//   li.style.color = "#ff00a0";
//   list.prepend(li);
//   input.value = "";
// });

// childNodes, children 차이
// const children = document.querySelector("div").children;
// const childNodes = document.querySelector("div").childNodes;

// console.log("children", children);
// console.log("nodes", childNodes);
