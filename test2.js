var readline = require('readline-sync')

//1ft 3.5
//300 * 200

try{
    console.log("1피트당 샷시의 가격은 얼마인가요?")
    const perFeet = parseFloat(readline.prompt())


}catch(e){
    console.log("잘못 입력했어요...")

}




// const perFeet = 3.5

const width = 300
const hegith = 200



//창문 =>가로 * 2, 세로 * 2 => 전체 샷시 길이

const totalLength = (width *2) + (hegith * 2)

//길이(cm) => ft

const totalFeet = Math.ceil(totalLength / 30.48)



console.log(totalFeet)

const totalPay = totalFeet * perFeet

console.log(`총 ${totalPay}달라입니다.`)
console.log(`부가세 ${totalPay*0.1}`)
console.log(`부가세 합계 ${totalPay*1.1}`)


//가격 계산