function random(max, min){
    let rndmnum = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(rndmnum)
}
random(5,10)


//return
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(rand(50,80))