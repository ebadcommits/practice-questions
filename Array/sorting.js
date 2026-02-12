const sort = function(arr, order){
    if(order === "ascending") return arr.sort((a, b) => a - b)
    if(order === "descending") return arr.sort((a, b) => b - a)   
}
console.log(sort([5,6,7,9,4,1,2,8], "ascending"))