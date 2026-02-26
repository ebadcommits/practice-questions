function missing(num){
    let numbers = num.sort((a, b) => a - b)
    let n = numbers.length + 1

    let expected = n * (n + 1)/2
    let actual = numbers.reduce((acc, curr) => acc + curr, 0)
    return expected - actual
}
console.log(missing([1,2,3,4,5,7]))