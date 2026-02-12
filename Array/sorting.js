const sort = function(arr, order = "asc"){
    order.toLowerCase()
    return order === "asc" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a)   
}
console.log(sort([5,6,7,9,4,1,2,8], "DESCENDING"))

//manual
function bubbleSort(arr, order = "asc") {
    let a = [...arr] // copy to avoid mutating original

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {

            // ASCENDING
            if (order === "asc" && a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]]
            }

            // DESCENDING
            if (order === "desc" && a[j] < a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]]
            }
        }
    }

    return a
}

console.log(bubbleSort([5, 1, 9, 2], "asc"))
