const arr = [] // 비어 있는 배열을 생성

while(true){

    //숫자를 생성 1-45 사이의 숫자
    const num = parseInt(Math.random()* 45 ) +1

    console.log(num, arr.indexOf(num)) //배열 내에서 발견되는 요소의 최초의 인덱스 반환. 발견되지 않으면 (-1).
    //검사
    const index = arr.indexOf(num)

    if(index >= 0){ //index가 0보다 크거나 같으면 전에 나왔던 숫자
        continue //윗쪽으로 탈출
    }
    const newLength =arr.push(num) //배열 arr 에 새로 생선된 숫자 추가


    if(newLength === 6){
        break //숫자 6개 만들었으면 while 밖으로 탈출
    }
}

console.log(arr) //배열 숫자 6개 출력