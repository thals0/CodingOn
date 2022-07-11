// 엄격하게 해줌
"use strict";

// string
let myName = "Somin";
let email = "thals0107@naver.com";
let hello = `안녕하세요 제 이름은 ${myName}입니다`;
console.log(myName);
console.log(email);
console.log(hello);

// 문자열끼리 '-'하면 int로 바꿔서 계산해버림
// 못 뺄 거 같으면 NaN 반환 ex) "123"-"가나다" = NaN
// JS 관대한 문자기 때문에
let num = "163";
let opa = "0.7";
console.log(num);
console.log(opa);
console.log(num - opa);

// int
let height = 163;
let opacity = 0.7;
console.log(height);
console.log(opacity);

// boolean
let checked = true;
let isShow = false;
console.log(checked);
console.log(isShow);
console.log(checked + isShow);

// undefined
let undef;
console.log(undef);
undef = "somin";
console.log(undef);

// null
//let emtyp=""; 와 다름 주의 ""는 공백 문자열
let empty = null;
console.log(empty);

// array
let fruits = ["apple", "peach", "orange", "lemon"];
console.log(fruits[0], fruits[1], fruits[2], fruits[3]);
console.log(fruits);

// object
let somin = {
  name: "somin",
  age: 24,
  hobby: ["youtube", "music"],
  email: "thals0107@naver.com",
};
console.log(somin.name);
console.log(somin.age);
console.log(somin.hobby);
console.log(somin.email);

let number = 123;
// 띄어쓰기, 변수 data type그대로 유지
console.log("안녕하세요 저는", number, "입니다.");
// 띄어쓰기 없음, 변수 data type 변경
console.log("안녕하세요 저는" + number + "입니다.");
// 변수 data type 무조건 문자로
console.log(`안녕하세요 저는 ${number} 입니다.`);

// variable
// let
let box = 123;
console.log(box);
box = 456;
console.log(box);
// data type도 저절로 변형시켜줌
box = "box";
console.log(box);

// const
const box2 = 333;
console.log(box2);
// 재할당 불가능 error 발생
// box2 = 999;
// console.log(box2);

// var
var name = "haru";
var name = "LSM";
console.log(name);
