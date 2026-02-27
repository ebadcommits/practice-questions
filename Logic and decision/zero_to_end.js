function zero(num){
    let nonzero = []
    for(let n of num){
        if(n != 0){
            nonzero.push(n)
        }
    }
    for(let n of num){
        if(n == 0){
            nonzero.push(n)
        }
    }
    console.log(nonzero)
}
zero([0,2,0,4,5])

//swapping
function moveZeros(arr) {
    let pos = 0; // position for next non-zero to go
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            // swap arr[i] with arr[pos]
            let temp = arr[pos];
            arr[pos] = arr[i];
            arr[i] = temp;

            pos++; // move the pointer
        }
    }

    return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
