function flatten(arr){
    let array = []
    for(let elem of arr){
        if(Array.isArray(elem)){
            array.push(...flatten(elem))
        }
        else{
            array.push(elem)
        }
    }
    return array.sort()
}
console.log(flatten([8,9,[3,4,[5,6,[7,1],2]]]))

//built in function
function flat(arr){
    return arr.flat()
}
console.log(flat([1,2,[3,4]]))