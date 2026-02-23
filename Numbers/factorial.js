function factorial(n){
    let sum = 1
    for(let i = n; i>0 ; i--){
        sum *= i
    }
    console.log(sum)
}
factorial(5)

function factorial(n){
    let sum = 1
    for(let i = 1; i<=n ; i++){
        sum *= i
    }
    console.log(sum)
}
factorial(5)