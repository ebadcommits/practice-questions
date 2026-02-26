function missing(num){
    let numbers = num.sort((a, b) => a - b)
    let n = numbers.length + 1

    let expected = n * (n + 1)/2
    let actual = numbers.reduce((acc, curr) => acc + curr, 0)
    return expected - actual
}
console.log(missing([1,2,3,4,5,7]))


//simple math
function missingCount(arr){
    let n = arr.length + 1;

    for(let i = 1; i <= n; i++){
        if(!arr.includes(i)){
            return i;
        }
    }
}

//using map
function missingHash(arr){
    let map = {};
    let n = arr.length + 1;

    for(let num of arr){
        map[num] = true;
    }

    for(let i = 1; i <= n; i++){
        if(!map[i]) return i;
    }
}


//usig XOR
function missing(nums){
    let xor1 = 0;
    let xor2 = 0;

    // XOR of all numbers from 1…n
    for(let i = 1; i <= nums.length + 1; i++){
        xor1 ^= i;
    }

    // XOR of all numbers in array
    for(let num of nums){
        xor2 ^= num;
    }

    return xor1 ^ xor2;
}

console.log(missing([1,2,3,4,5,7])); // 6
