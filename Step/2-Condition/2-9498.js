/* 시험 성적
 * 문제: 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
 * 입력: 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
 * 출력: 시험 성적을 출력한다.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const A = Number(line);
  if (A > 100 || A < 0) console.log("Wrong input");
  else {
    if (A <= 100 && A >= 90) console.log("A");
    else if (A <= 89 && A >= 80) console.log("B");
    else if (A <= 79 && A >= 70) console.log("C");
    else if (A <= 69 && A >= 60) console.log("D");
    else console.log("F");
  }

  rl.close();
}).on("close", () => {
  process.exit();
});
