function ab (){
    let arr = [8,7,6,4,9,1,2,0,-1,11];
    let large = arr[0];
    let small = arr[0]; 
    for (let i of arr){
        if ( i >= large ){
            large = i
        }
        if ( i <= small ){
            small = i 
        }    
    }
    console.log(`Largest number is: ${large}`);
    console.log(`Smallest number is: ${small}`);
}
ab();