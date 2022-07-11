// let somin = "LSM";

// if (somin == "LSM") {
//   console.log("O");
// } else {
//   console.log("X");
// }

// somin == "LSM" ? console.log("O") : console.log("X");

let a = new Date().getDay();
if (a == 0) {
  console.log("SUN");
} else if (a == 1) {
  console.log("MON");
} else if (a == 2) {
  console.log("TUE");
} else if (a == 3) {
  console.log("WED");
} else if (a == 4) {
  console.log("THU");
} else if (a == 5) {
  console.log("FRI");
} else if (a == 6) {
  console.log("SAT");
}

// 답
let day = new Date().getDay();
let dayName = "";
if (a == 0) {
  dayName = "SUN";
} else if (a == 1) {
  dayName = "MON";
} else if (a == 2) {
  dayName = "TUE";
} else if (a == 3) {
  dayName = "WED";
} else if (a == 4) {
  dayName = "THU";
} else if (a == 5) {
  dayName = "FRI";
} else if (a == 6) {
  dayName = "SAT";
}
