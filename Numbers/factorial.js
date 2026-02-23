function factorial(n){
    let sum = 0
    for(let i = n - 1 ; i>0 ; i--){
        sum += (n*i)
    }
    console.log(sum)
}
factorial(5)