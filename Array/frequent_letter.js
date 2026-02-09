function frequent(val){
    let obj = {}
    let maxcount = 0
    let mstfrqnt
    for(let i of val){
        if(!obj[i]){
            obj[i] = 1
        }
        else{
            obj[i]++
        }
    }

    for(let Key in obj){
        if(obj[Key] > maxcount){
            maxcount = obj[Key]
            mstfrqnt = Key
        }
    }
    console.log(obj, "most frequent num is " + mstfrqnt)
}

frequent([1,1,2,3,4,4,4])


//reduce
function mostFrequentReduce(arr) {
    // Step 1: Build frequency object using reduce
    const frequency = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1; // increase count
        return acc; // must return accumulator every time
    }, {}); // {} is the initial value of accumulator

    // Step 2: Find the max
    let maxCount = 0;
    let mostFrequent;
    for (let key in frequency) {
        if (frequency[key] > maxCount) {
            maxCount = frequency[key];
            mostFrequent = key;
        }
    }

    console.log("Frequency Object:", frequency);
    console.log("Most frequent number is:", mostFrequent);
}

// Test
mostFrequentReduce([1, 1, 2, 3, 4, 4, 4]);



//map
function mostFrequentMap(arr) {
    let map = new Map();
    let maxCount = 0;
    let mostFrequent;

    // Step 1: Count occurrences
    for (let num of arr) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1); // increase count
        } else {
            map.set(num, 1); // first time
        }
    }

    // Step 2: Find the max count
    for (let [key, value] of map.entries()) {
        if (value > maxCount) {
            maxCount = value;
            mostFrequent = key;
        }
    }

    console.log("Frequency Map:", map);
    console.log("Most frequent number is:", mostFrequent);
}

// Test it
mostFrequentMap([1, 1, 2, 3, 4, 4, 4]);
