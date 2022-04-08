/* A-B
 * 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.
 */

const readline = require('readline'); // js에서 입력을 받는 방법 중 한 가지
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = [];

rl.on('line', function(line) {
    input = line.split(' ').map((el) => parseInt(el)); // ' ' 공백을 기준으로 문자열을 split 후 parseInt로 정수처리 => 공백을 기준으로 입력을 2개 받고 input 배열에 넣어 인덱스 0, 1로 출력
    rl.close();
})
.on('close', function() {
    console.log(input[0] - input[1]);
    process.exit();
});