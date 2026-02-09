function frequent(val){
    let obj = {}
    let maxcount = 0
    let mstfrqnt
    for(let i of val){
        if(!obj[i]){
            obj[i] = 1
        }
        else{
            obj[i] = obj[i] + 1
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

