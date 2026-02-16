function format(num){
    let altered = []
    let reversed = num.split('').reverse()
    for(let i = 0; i < reversed.length; i++){
        if(i % 3 === 2){
            altered.push(reversed[i], ',')
        }
        else{
            altered.push(reversed[i])
        }
    }
    let flipped = altered.reverse().join('')
    console.log(flipped)
}
format("1234567")

//reversed loop
function format2(num){
    let result = []
    let splitted = num.split("")
    let count = 0
    for(let i = splitted.length - 1; i>=0; i--){
        result.push(splitted[i])
        count++

        if(count % 3 === 0 && i != 0){
            result.push(',')
            count = 0
        }
    }
    let altered = result.reverse().join("")
    console.log(altered)
}
format2('1234567')

//lol
function format3(num){
    let val = Number(num)
    let lol = val.toLocaleString()
    console.log(lol)
}
format3('1234567')