// boxEl=box element

let boxEl = document.querySelector(".box");
console.log(boxEl);
boxEl.addEventListener("click", function () {
  if (boxEl.classList.contains("orange")) {
    boxEl.classList.remove("orange");
    boxEl.classList.add("skyblue");
  } else {
    boxEl.classList.add("orange");
  }
  console.log(boxEl);
});

// 새로고침하면 원래의 html로 돌아감
