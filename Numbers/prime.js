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

//check how many primes till N limit
function prime(n){
    for(let i = 2; i<=n; i++){
        let isprime = true

        for(let j = 2; j<i; j++){
            if(i % j === 0){
                isprime = false
                break
            }
        }
        if(isprime){
            console.log(i)
        }
    }
}
prime(50)