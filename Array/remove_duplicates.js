function duplicate(val){
    let arr = [];
    for(let i of val){
        if(!arr.includes(i)){
            arr.push(i)
        }
    }
    console.log(arr)
}
duplicate([1,1,2,3,4,5])