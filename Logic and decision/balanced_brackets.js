function balanced(str) {
    let stack = [];
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {

        // if opening bracket → push
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        
        // if closing bracket
        else if (char === ')' || char === '}' || char === ']') {
            // stack must have that opening bracket on top
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(balanced("{[()]}"));  // true
console.log(balanced("{[(])}"));  // false
