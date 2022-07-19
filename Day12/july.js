const inputDate = document.querySelector("#date");
const content = document.querySelector("#content");
const btn = document.querySelector("button");
const table = document.querySelector("table");
// e.target 사용

table.addEventListener("click", function (e) {
  if (e.target.tagName === "P") {
    const select = e.target;
    inputDate.value = select.textContent;

    btn.addEventListener("click", function () {
      const divEl = document.createElement("div");
      divEl.append(content.value);
      select.parentNode.append(divEl);
    });
  }
});
