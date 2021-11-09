var readline = require('readline-sync') //java의 import와 비슷, readline-sync 모듈을 불러옴

//주어진 데이터

const r1 = 10;
const r2 = 20;

//원의 넓이
const area1 = Math.pow(r1,2) * Math.PI
const area2 = Math.pow(r2, 2)* Math.PI


let gap = area1-area2

// if(gap < 0){
//
//     gap = gap * -1
// }

gap = gap < 0 ? gap * -1 : gap //삼항연상자, 조건연산자

console.log(`이 도형의 넓이는 ${gap}`)
gap = gap.toFixed(2) //소수점 2자리까지 나타나도록 반올림함

console.log(`이 도형의 넓이는 ${gap}`)


