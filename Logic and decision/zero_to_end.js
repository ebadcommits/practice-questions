function zero(num){
    let nonzero = []
    for(let n of num){
        if(n != 0){
            nonzero.push(n)
        }
    }
    for(let n of num){
        if(n == 0){
            nonzero.push(n)
        }
    }
    console.log(nonzero)
}
zero([0,2,0,4,5])