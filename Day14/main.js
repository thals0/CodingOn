// let str = "우영";
// let longStr = str.repeat(5) + "우";
// console.log(longStr);

// let str = "              우영우                 ";
// let trimStr = str.trim();
// console.log(trimStr);

// const pi = 3.14159265358979;
// let int = parseInt(pi);
// let float = parseFloat(pi);
// console.log(int);
// console.log(float);
// console.log(typeof int, typeof float);

// let minus = -999;
// // Math -> JS 기본 내장 함수
// console.log("abs : ", Math.abs(minus));
// console.log("min : ", Math.min(1, 2, 3, 4, -1));
// console.log("max : ", Math.max(1, 2, 3, 4, 77));
// console.log("ceil : ", Math.ceil(3.14));
// console.log("floor : ", Math.floor(3.99));
// console.log("round : ", Math.round(3.14));
// console.log("random : ", Math.random());

// let num = [-1.23, 13, 14.52, -33.53, 30];
// // let min = Math.min(-1.23, 13, 14.52, -33.53, 30);
// let min = Math.min(...num);
// // let max = Math.max(-1.23, 13, 14.52, -33.53, 30);
// let max = Math.max(...num);
// console.log(Math.floor(min));
// console.log(Math.floor(max));

// num의 절댓값 평균 구하기
// 여기 다시 확인
// for (let i of num) {
//   const sum = 0;
//   sum += Math.abs(i);
// }
// console.log(sum / num.length);

// 0~100 중 랜덤 정수 만들기
// console.log(Math.round(Math.random() * 100));

// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [1, 2, 3, 4];
// // numbers1.shift(0);
// // numbers1.shift(1);
// numbers1.splice(0, 2); //(시작점, 자를갯수)
// console.log(numbers1);
// numbers2.splice(2, 1, 77);
// console.log(numbers2);

// let numbers = [1, 2, 3, 4];
// let fruits = ["사과", "딸기", "수박"];
// console.log(numbers.concat(fruits));
// console.log(numbers);
// console.log(fruits);

// let numbers = [1, 2, 3, 4, 5, 6];
// let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// for (let i of numbers) {
//   console.log(i);
// }
// for (let i of fruits) {
//   console.log(i);
// }
// forEach문
// numbers.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });
// fruits.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });
// // 화살표 함수 사용
// numbers.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

// let numbers = [1, 2, 3, 4, 5, 6];
// let sum1 = 0;
// let sum2 = 0;
// let sum3 = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum1 += numbers[i];
// }
// for (let item of numbers) {
//   sum2 += item;
// }
// numbers.forEach(function (num) {
//   sum3 += num;
// });
// console.log(sum1);
// console.log(sum2);
// console.log(sum3);

// let number = [];
// for (let i = 1; i < 101; i++) {
//   number.push(i);
// }
// let sum1 = 0;
// let sum2 = 0;
// let sum3 = 0;
// for (let i = 0; i < 101; i++) {
//   sum1 += i;
// }
// for (let num of number) {
//   sum2 += num;
// }
// number.forEach(function (num) {
//   sum3 += num;
// });
// console.log(sum1, sum2, sum3);

// let numbers = [1, 2, 3, 4, 5, 6];
// let fore = numbers.forEach(function (item) {
//   return item;
// });
// let map = numbers.map(function (item) {
//   return item;
// });
// // forEach는 return값 반환하지 않음
// console.log(fore);
// console.log(map);
// // 화살표 함수 1
// let map2 = numbers.map(() => {
//   return item;
// });
// // 화살표 함수 2
// let map3 = numbers.map((item) => item);

// const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];
// let obj = fruits.map((item, index) => {
//   return {
//     id: index + 1,
//     name: item,
//   };
// });
// console.log(obj);

// let numbers = [1, 2, 3, 4, 5, 6];
// let reduce = numbers.reduce(function (sum, item, index, arr) {
//   // console.log(sum, item, index, arr);
//   return sum + item;
// });

// 여기 다시
// let numbers = [];
// for (let i = 0; i < 100; i++) {
//   numbers.push(i);
// }
// let reduce = numbers.reduce(function (sum, item) {
//   return sum + item;
// });
// console.log(reduce);

// let str = "apple";
// // console.log([...str]);
// [...str].forEach(function (item, index, arr) {
//   console.log(item, index, arr);
// });

// let numbers = [1, 2, 3, 4, 5, 6];
// let arr = numbers.filter(function (item) {
//   return item > 3;
// });
// console.log(arr);
// // filter 화살표 함수로 많이 사용
// let arr2 = numbers.filter((item) => item > 3);

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// let arr = words.filter((item) => item.length >= 6);
// console.log(arr);

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// console.log(words.includes("spray"));
// console.log(words.includes("hi"));

// let fruits1 = [
//   "사과",
//   "딸기",
//   "파인애플",
//   "수박",
//   "참외",
//   "오렌지",
//   "자두",
//   "망고",
// ];
// let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// let same = fruits1.filter((item) => fruits2.includes(item));
// console.log(same);
// //forEach 사용
// fruits1.forEach(function (item) {
//   if (fruits2.includes(item)) {
//     same.push(item);
//   }
// });
// let diff = [];
// diff = fruits1.filter((item) => !fruits2.includes(item));
// //forEach 사용
// fruits1.forEach(function (item) {
//   if (!fruits2.includes(item)) {
//     diff.push(item);
//   }
// });
// console.log(diff);

// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 3, c: 4 };
// let assignedObj = Object.assign(obj1, obj2);
// console.log(assignedObj); // { a: 1, b: 3, c: 4 };
// console.log(obj1); // { a: 1, b: 3, c: 4 };
// console.log(obj2); // { b: 3, c: 4 }

// const userName = {
//   id: 1,
//   name: "haru",
// };
// const userEmail = {
//   id: 1,
//   email: "***@naver.com",
// };
// const assignedObj = Object.assign(userName, userEmail);
// console.log(assignedObj);
// console.log(userName);
// console.log(assignedObj === userName); // true

// const assignedObj = Object.assign({}, userName, userEmail);
// Object.assign(userName, userEmail);
// console.log(assignedObj);
// console.log(userName);
// console.log(assignedObj === userName); // false

// const a = { x: "y" };
// const b = { x: "y" };
// console.log(a === b); // false

// const user = {
//   id: 1,
//   name: "Haru",
//   email: "***@naver.com",
// };
// const keys = Object.keys(user);
// console.log(keys);
// // ["id", "name", "email"]
// const values = keys.map((key) => user[key]);
// console.log(values);
// const { id, name, email, address="KOREA" } = user;
// console.log(id, name, email, address);

// const fruits = ["사과", "바나나", "수박", "망고", "딸기"];
// function conLog(a, b, ...c) {
//   console.log(a, b, c);
// }
// conLog(...fruits);

// const fruits = ["사과", "바나나", "수박", "망고", "딸기"];
// function conLog(...rest) {
//   rest.forEach((element) => {
//     console.log(element);
//   });
// }
// conLog(...fruits);
