function nonrep(val) {
    val = val.toString();      // ensure it's iterable as a string
    let freq = {};

    // 1) Count frequency
    for (let ch of val) {
        if (freq[ch] === undefined) {
            freq[ch] = 1;
        } else {
            freq[ch]++;
        }
    }

    // 2) Find first character with freq = 1
    for (let ch of val) {
        if (freq[ch] === 1) {
            return ch;
        }
    }

    return null; // if no unique character found
}

console.log(nonrep(1122344)); // → 3
