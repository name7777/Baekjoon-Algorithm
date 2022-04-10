/* 곱셈
 * 문제: https://www.acmicpc.net/problem/2588
 * 입력: 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.
 * 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.
 */

const fs = require('fs');
const [A, B] = fs.readFileSync("./dev/stdin.txt").toString().trim().split('\n'); // ★ 구조분해할당

const [B0, B1, B2] = B.split('');
const temp1 = A * B2;
const temp2 = A * B1;
const temp3 = A * B0;
const sum = temp1 + Number(`${temp2}0`) + Number(`${temp3}00`);
console.log(`${temp1}\n${temp2}\n${temp3}\n${sum}`)
