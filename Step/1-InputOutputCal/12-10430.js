/* 나머지
 * 문제: (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
   (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
   세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.
 * 입력: 첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)
 * 출력: 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input = line.split(' ').map((el) => parseInt(el));
    const A = input[0];
    const B = input[1];
    const C = input[2];
    
    console.log((A + B) % C);
    console.log(((A % C) + (B % C)) % C);
    console.log((A * B) % C);
    console.log(((A % C) * (B % C) % C));
    
    rl.close();
})
.on('close', () => {
    process.exit();
});