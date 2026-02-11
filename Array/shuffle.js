const shuffle = function(arr){
    let shuffled = arr
    for(let i = arr.length - 1; i>0; i--){
       let random = Math.floor(Math.random() * (i+1));
        
       let temp = shuffled[i]
        shuffled[i] = shuffled[random]
        shuffled[random] = temp
        
    }
    return shuffled
}
console.log(shuffle([5,4,8,3,2,9,0,1]))