// 1. 숫자 생성
// 2. 기존에 뽑힌 숫자인지 확인
// 3. 뽑힌 숫자면 다시 뽑음
// 4. 아니면 저장 arr.push
// 5. 배열에 6개 저장되면 저장

let lottoCnt = 0
let lottoArr = []

while(true){
    if(lottoCnt == 6)
    {
        break //6개 뽑으면 종료
    }else{
        //새로 뽑은 것이 기존 번호에 있는지 확인
        let lotNo = parseInt(Math.random()*100) %45 +1
        console.log(lotNo)
        if(lottoArr.includes(lotNo))
        {
            continue

        }else{
            lottoArr.push(lotNo)

        }
        lottoCnt++
    }
}
console.log(lottoArr)
console.log(lottoArr.length)