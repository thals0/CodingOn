// const pororo = {
//   name: "뽀로로",
//   height: 70,
//   weight: 50,
//   gender: "None",
//   say: function () {
//     console.log("뽀로로가 말을 합니다.");
//   },
// };

// for (key in pororo) {
//   console.log(key, pororo[key]);
// }

// pororo.say();

// this
// function sayHello() {
//   console.log(`Hello, I'm ${this.name}`);
//   console.log(this);
// }
// let boy = {
//   name: "Justin",
//   sayHello,
// };
// let girl = {
//   name: "Anna",
//   sayHello,
// };
// boy.sayHello();
// girl.sayHello();

// 실습1
// let showHeight = () => {
//   console.log(this.height);
//   console.log(this);
// };

// const showName = () => {
//   console.log(this.name);
//   console.log(this);
// };

// const pororo = {
//   name: "뽀로로",
//   height: 70,
//   weight: 50,
//   gender: "None",
//   showName,
//   showHeight,
// };
// const rupy = {
//   name: "루피",
//   height: 50,
//   showName,
//   showHeight,
// };
// pororo.showName();
// pororo.showHeight();
// rupy.showName();
// rupy.showHeight();

// 생성자 함수
// function Fruits(name, price) {
//   this.name = name;
//   this.price = price;
//   this.showPrice = function () {
//     console.log(`${this.name}의 가격은 ${this.price}입니다.`);
//   };
// }
// let orange = new Fruits("오렌지", 3000);
// let dragonFruit = new Fruits("용과", 2500);
// let banana = new Fruits("바나나", 2000);
// let pineApple = new Fruits("파인애플", 5000);

// orange.showPrice();
// dragonFruit.showPrice();
// banana.showPrice();
// pineApple.showPrice();

// 실습2
// function Kdt(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   this.showInfo = function () {
//     console.log(`${this.name}은 ${this.gender}자입니다.`);
//   };
// }
// let stu1 = new Kdt("지훈", "남");
// let stu2 = new Kdt("소민", "여");
// let stu3 = new Kdt("지현", "여");
// let stu4 = new Kdt("의진", "여");
// stu1.showInfo();
// stu2.showInfo();
// stu3.showInfo();
// stu4.showInfo();
