const sort = function(arr, order = "asc"){
    order.toLowerCase()
    return order === "asc" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a)   
}
console.log(sort([5,6,7,9,4,1,2,8], "DESCENDING"))