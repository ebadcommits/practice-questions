function evenodd(arr){
    let even = []
    let odd = []
    for(let num of arr){
        num % 2 === 0 ? even.push(num) : odd.push(num)
    }
    console.log(even, odd)
}
evenodd([1,2,3,4,5,6,7,8,9,10])

//map
function evenodd2(arr){
    let even = []
    let odd = []
    
    arr.map((num) => num % 2 === 0 ? even.push(num) : odd.push(num))
    console.log(even, odd)
}
evenodd2([1,2,3,4,5,6,7,8,9,10])

//reduce
function evenodd3(arr) {
    return arr.reduce((acc, num) => {
        acc[num % 2 === 0 ? "even" : "odd"].push(num);
        return acc;
    }, { even: [], odd: [] });
}
console.log(evenodd3([1,2,3,4,5,6,7,8,9,10]));

//foreach
function evenodd2(arr) {
    let even = [];
    let odd = [];

    arr.forEach(num => {num % 2 === 0 ? even.push(num) : odd.push(num);});
    console.log(even, odd);
}
