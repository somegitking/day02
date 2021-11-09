//
// const arr = ['타노스', '아이언맨','블랙 위도우']
//
// console.log(arr.length)
//
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// arr[3] = '블랙 팬서'
// console.log(arr)
//
// arr.push("아이언맨") //배열추가
// arr.push("베트맨")
//
// console.log(arr)
//
// arr.splice(1,1)
// console.log(arr)

const arr1 = ['타노스','블랙 위도우' , '블랙 팬서']
console.log(arr1) //전체 배열 추가

for(let i = 0 ; i < arr1.length ; i++){

    if(arr1[i] == '블랙 위도우'){
        continue;
    }
    console.log(i)
    console.log(arr1[i])

}
console.log("------------------")

//배열
//추가, 뒤에꺼 제거, 앞에 추가 , 앞에 제거, 인덱스 번호 찾기(indexof)
//splice 특정 인덱스에 있는 것을 제거
//js는 undefined, 값이 없음, 변수는 존재함
//java는 에러 아웃오브 바운드