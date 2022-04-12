/* A+B-3
 * 문제: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 * 입력: 
    첫째 줄에 테스트 케이스의 개수 T가 주어진다.
    각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
 * 출력: 각 테스트 케이스마다 A+B를 출력한다.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.on('line', (line) => {
  let count = line;
  count += 1;
  
  if(count == 3) {
    console.log(line);
    rl.close();
  }
})