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