function format(num){
    let reversed = num.split('').reverse()
    for(let i = 0; i < num.length; i++){
        if(i % 3 === 0){
            reversed.join(',')
        }
    }
    console.log(reversed)
}
format("1234567")