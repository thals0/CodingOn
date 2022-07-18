const inputTask = document.querySelector(".input-task");
const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");

// console.log로 확인하는 습관 좋음
// console.log(inputTask);

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력해 주세요.");
  } else {
    const addLi = document.createElement("li");

    // checkBox
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.addEventListener("click", function () {
      if (checkBox.checked === true) {
        // 자식의 class 유무에 따라 부모의 css를 변경하는 css문법 없으므로 js로 처리
        // parentNode 부모요소 반환
        // checkBox.parentNode.style = "text-decoration: line-through";
        checkBox.parentNode.style.textDecoration = "line-through";
      } else {
        checkBox.parentNode.style.textDecoration = "none";
      }
    });

    // deleteBtn
    const deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "-");
    // deleteTask 1st 방법
    // deleteBtn.setAttribute("onclick", "deleteTask(this);");

    // li 자식요소로 checkBox, deleteBtn 넣어주기(순차적으로 넣는 것 중요)
    // addLi.append(checkBox ,inputTask.value ,deleteBtn);
    addLi.append(checkBox);
    // <li><input type="checkbox" /></li>
    // textContent사용시 자식의 모든 요소 reset시켜버림
    // addLi.textContent = inputTask.value;
    addLi.append(inputTask.value);
    addLi.append(deleteBtn);
    todoList.append(addLi);
    // input창 초기화
    inputTask.value = "";
  }
});

// delete 2nd 방법
todoList.addEventListener("click", function (e) {
  // console.log(e.target); //this와 유사
  // console.log(e.target.tagName);
  // input이면서 type이 button일 때만 삭제(checkbox도 input이므로)
  if (
    e.target.tagName === "INPUT" &&
    e.target.getAttribute("type") === "button"
  ) {
    e.target.parentNode.remove();
  }
});

// deleteTask 함수
// function deleteTask(t) {
//   // console.log(t);
//   t.parentNode.remove();
// }

// test
// const test = document.querySelector(".test");
// test.addEventListener("click", function () {
//   // check 되어있을 때 true, 되어있지 않을 때 false
//   console.log(test.checked);
// });
