//컨셉 딱 6회만 뽑고 끝난다/ 신속하게 끝난다

//1. 빈배열을 만든다
//2. 배열 숫자를 채워 넣는다 1~45 반복문

const arr = []

for(let i = 1 ; i<=45; i++){ //
    arr.push(i) //배열 arr 1~45 까지 1개씩 입력
}
// console.log(arr)

//console.log(arr.length)
for(let i = 0 ; i <6 ; i++) {
//    const idx = 9; //예제 숫자를 이용한 동작, 숫자 9를 이용하여 splice가 어떻게 동작하는지 확인
    const idx = parseInt(Math.random() * arr.length ) //1~45 숫자 중에 1개 생성, idx에 저장

//    arr.splice(idx, 1) // idx라는 인덱스 번호에 대해서 삭제, deleteCount는 저장된 숫자로 부터 몇개 삭제할 갯수
    console.log(arr.length)                        // 배열 갯수보다 많이(넘치게) 삭제해도 에러 나지는 않음, 전체 배열 요소 삭제 가능
    console.log(arr.splice(idx,1)  )
    console.log(arr.length  )
    console.log('\n') //줄바꿈
//6회 뽑기 asdfasdfasdf
}