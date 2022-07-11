// 함수명은 camelCase
function helloFunc() {
  console.log("hello world");
}

function returnFunc() {
  return 123;
}
let a = returnFunc();
console.log(a);
console.log(returnFunc());

// 기명함수
function hello() {
  console.log("hello");
}
hello();

// 익명함수
let world = function () {
  console.log("world");
};
world();

// object part
const somin = {
  // data part
  name: "somin",
  age: 24,
  hobby: ["youtube", "music"],
  email: "thals0107@naver.com",
  isMarried: false,
  // method part
  getName: function () {
    return this.name;
  },
  doseSheMarried: function () {
    return this.isMarried;
  },
  getHobby: function () {
    console.log(this.hobby);
  },
  getEmail: function () {
    return this.email;
  },
};
let herName = somin.getName();
console.log(herName);
console.log(somin.doseSheMarried());
somin.getHobby();
let herEmail = somin.getEmail();
console.log(herEmail);

// multify
function mult(a, b) {
  return a * b;
}
let x = mult(10, 20);
console.log(x);
console.log(mult(2, 2));

// onclick
function onClick() {
  alert("Clicked!");
}
