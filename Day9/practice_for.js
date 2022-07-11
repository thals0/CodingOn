// for (let i = 2; i < 10; i++) {
//   console.log(i + "단 ✅");
//   for (let j = 1; j < 10; j++) {
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

let sum = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0 || i % 5 == 0) {
    sum = sum + i;
  }
}
console.log(sum);
