// console.log(typeof null);
// console.log(typeof "hi");
// console.log(typeof 77);
// {} 빈 object 선언
// console.log(typeof {});

// 실습
// let age = 24;
// let myName = "somin";
// console.log(`${typeof age} isn't ${typeof myName} data type`);
// console.log(
//   `typeof를 ${typeof true}이나 null에 사용하면, ${typeof {}}결과를 얻을 수 있습니다.`
// );

// let mathScore = prompt("수학점수를 입력해 주세요.");
// let engScore = prompt("영어점수를 입력해 주세요.");
// mathScore = Number(mathScore);
// engScore = Number(engScore);
// let avgScore = (mathScore + engScore) / 2;
// console.log(avgScore);

// 실습2
// let mathScore = "77";
// let engScore = "88";
// mathScore = Number(mathScore);
// engScore = Number(engScore);
// let avgScore = (mathScore + engScore) / 2;
// console.log(avgScore);

// let nameArr = ["가", "나", "다", "라"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}번째 이름은 ${nameArr[i]}입니다.`);
// }

// 제곱근
// let a = 8 ** 2;
// console.log(a);
// let num = Math.sqrt(64);
// console.log(num);

// 실습3
// let num = 10;
// console.log(++num);
// num = 10;
// num++;
// console.log(num);
// num = 10;
// console.log(--num);
// num = 10;
// console.log((num /= 2));
// num = 10;
// console.log((num /= 5));
// num = 10;
// console.log((num *= 3));

// 논리연산자
// let name = "thals";
// let age = 16;
// let isAdult = age > 19;
// if (isAdult) {
//   console.log("통과");
// } else {
//   console.log("돌아가");
// }

// 여성이고, 이름이 Jane 이거나 성인이면 통과
// let gender = "M";
// let myName = "Tom";
// let isAdult = true;
// if (gender === "F" && (myName === "Jane" || isAdult === true)) {
//   console.log("통과");
// } else {
//   console.log("돌아가");
// }

// 실습4
// let isAdult = true;
// let isDrunken = true;
// let vip = true;
// let money = true;
// if (money || (!isDrunken && (isAdult || vip))) {
//   console.log("통과");
// } else {
//   console.log("돌아가");
// }

// 실습5
// let userInput = prompt("숫자");
// userInput = Number(userInput);
// for (let i = 0; i < userInput; i++) {
//   if (i % 13 == 0 && i % 2 == 1) {
//     console.log(i);
//   }
// }

// 시간복잡도 낮게 짜기
// let userInput = prompt("숫자");
// userInput = Number(userInput);
// for (let i = 0; i < userInput; i+=13) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// while문을 이용하여 구구단짜기
// let i = 2,
//   j = 1;
// while (i < 10) {
//   while (j < 10) {
//     console.log(i + "*" + j + "=" + i * j);
//     j++;
//   }
//   i++;
//   j = 1; // j=1로 초기화
// }

// do - while 문
// let i = 1;
// do {
//   console.log(`do-while 문에서 ${i} 번째 반복문을 시작합니다!`);
// } while (i < 0);

// while 문
// i = 1;
// while (i < 0) {
//   console.log(`while 문에서 ${i} 번째 반복문을 시작합니다!`);
// }

// let sum = 0;
// for (let i = 0; i < 1001; i++) {
//   if (i % 2 == 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// continue 사용
// let sum = 0;
// for (let i = 0; i < 1001; i++) {
//   if (i % 2 == 1) {
//     continue;
//   }
//   sum = sum + i;
// }
// console.log(sum);

// function
// function sayHello(name = "friend!") {
//   console.log(`Hello, ${name}`);
// }
// sayHello();

// 실습5
// function getTriArea(a, b) {
//   return (a * b) / 2;
// }
// console.log(getTriArea(4, 5));

// function getCircleArea(r) {
//   return 3.14 * r ** 2;
// }
// console.log(getCircleArea(3));

// function pita(x, y) {
//   return Math.sqrt(x ** 2 + y ** 2);
// }
// console.log(pita(3, 4));

// // 함수 선언문
// function sayHello() {
//   console.log("Hello");
// }
// // 함수 표현식
// let sayHello = function () {
//   console.log("Hello");
// };
// // 화살표 함수
// let sayHello = () => {console.log("Hello")}

// 실습6
// let getTriArea = function (a, b) {
//   return (a * b) / 2;
// };
// console.log(getTriArea(4, 5));

// let getCircleArea = (r) => {
//   return 3.14 * r ** 2;
// };
// console.log(getCircleArea(3));

// let pita = function (x, y) {
//   return Math.sqrt(x ** 2 + y ** 2);
// };
// let pita2 = (x, y) => {
//   return Math.sqrt(x ** 2 + y ** 2);
// };
// console.log(pita(3, 4));

// 실습7
// let stu = ["a", "b", "c", "d", "e", "f", "g", "h"];
// console.log(stu);
// stu.push("somin");
// console.log(stu);
// console.log(stu.length);

// 실습8
// for (let i = 0; i < stu.length; i++) {
//   console.log(`kdt ${i + 1}번째 참여자는 ${stu[i]}입니다.`);
// }

// let hello = "Hello";
// let helloArr = hello.split("");
// console.log(helloArr);
// // .split : 문자를 인수 기준으로 쪼개서 배열로 반환
// // .reverse : 배열의 순서를 뒤집어서 반환
// // .join : 배열을 인수 기준으로 병합해서 반환 (<-> .split)
// let reverseArr = helloArr.reverse();
// console.log(reverseArr);
// let joinStr = reverseArr.join("");
// console.log(joinStr);

// // 메소드 체이닝
// let hello = "Hello";
// let result = hello.split("").reverse().join("");
// console.log(result);

// 실습9
let pororo = {
  name: "pororo",
  age: 7,
  cute() {
    console.log("귀엽습니다");
  },
};
console.log(pororo);
pororo.gender = "male";
pororo.height = 100;
console.log(pororo);
delete pororo.gender;
console.log(pororo);
// property 존재 여부 확인
console.log("birthDay" in pororo);
console.log("name" in pororo);

for (key in pororo) {
  console.log(key);
  console.log(pororo[key]);
}
