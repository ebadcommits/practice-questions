function evenodd(arr){
    let even = []
    let odd = []
    for(let num of arr){
        num % 2 === 0 ? even.push(num) : odd.push(num)
    }
    console.log(even, odd)
}
evenodd([1,2,3,4,5,6,7,8,9,10])

