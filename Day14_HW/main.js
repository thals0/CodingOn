// let phone_number = "01012345678";
// const pri = [];
// function solution(phone_number) {
//   for (let i = 0; i < phone_number.length - 4; i++) {
//     pri.push(phone_number.replace(phone_number[i], "*"));
//   }
//   Object.assign(pri);
//   return pri;
// }
// solution(phone_number);
// console.log(solution(phone_number));

// 1
function solution(phone_number) {
  var answer = "";
  answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  return answer;
}
// 2
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) answer += i;
  }
  return answer;
}
// 3
function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
    answer.sort(function (a, b) {
      return a - b;
    });
  }
  if (answer.length === 0) {
    answer.push(-1);
  }
  return answer;
}
