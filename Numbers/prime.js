function isprime(n){
    if(n < 2){
        return "not a prime"
    }
    for(let i = 2; i<n; i++){
        if(n % i === 0){
            return "its not a prime"
        }
    }
    return "its a prime"
}
console.log(isprime(3))