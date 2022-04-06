/* 사칙연산
 * 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.
 */

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = [];

rl.on('line', function(line) {
    input = line.split(' ').map((el) => parseInt(el));
})
.on('close', function() {
    console.log(input[0] + input[1]);
    console.log(input[0] - input[1]);
    console.log(input[0] * input[1]);
    console.log(input[0] / input[1]);
    console.log(input[0] % input[1]);
    process.exit();
});
