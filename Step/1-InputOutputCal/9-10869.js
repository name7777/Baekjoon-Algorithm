/* 사칙연산
 * 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  input = line.split(' ');
    
  const num1 = Number(input[0]); // ★ 자연수(Number)로 변환
  const num2 = Number(input[1]);

  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(Math.floor(num1 / num2));
  console.log(num1 % num2);

  rl.close(); // 써줘야 node 커맨드에서 입력받은 후 자동으로 종료됨
}).on("close", function() {
  process.exit();
});
