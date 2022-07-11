// for 문
// "i = i + 1" == "i++""
for (let i = 0; i < 100; i++) {
  console.log(i + 1, "번째 반복중");
}

// while 문
let index = 0;
while (index < 10) {
  console.log("인사를", index + 1, "번째 드립니다.");
  index++;
}

let index2 = 0;
while (1) {
  console.log("절을", index2 + 1, "번째 올립니다.");
  index2++;
  if (index2 == 10) {
    break;
  }
}
