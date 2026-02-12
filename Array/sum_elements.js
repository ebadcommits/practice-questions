function sum(arr){
    let sum = 0
    for(let e of arr){
        sum += e
    }
    console.log(sum)
}
sum([1,2,3,4,5])

//map
function sum2(arr){
    let sum = 0
    arr.map(num => sum += num)
    console.log(sum)
}
sum2([1,2,3,4,5])

//foreach
function sum(arr) {
    let total = 0;
    arr.forEach(num => total += num);
    return total;
}