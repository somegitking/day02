//컨셉 딱 6회만 뽑고 끝난다/ 신속하게 끝난다

//1. 빈배열을 만든다
//2. 배열 숫자를 채워 넣는다 1~45 반복문

const arr = []

for(let i = 1 ; i<=45; i++){
    arr.push(i)
}
// console.log(arr)

for(let i = 0 ; i <6 ; i++) {
//    const idx = 9; //예제 숫자를 이용한 동작
    const idx = parseInt(Math.random() * arr.length )

    arr.splice(idx, 1)
    console.log(arr.splice(idx,1))
    // console.log(arr)
//6회 뽑기 asdfasdfasdf
}