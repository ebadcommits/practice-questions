function balanced(val){
    let brackets = []
    let rec = { 
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    for(let chr of val){
        if(chr === '(' || chr === '{' || chr === '['){
            brackets.push(chr)
        }

        else if(chr === ')' || chr === '}' || chr === ']'){
            if(brackets.pop() !== rec[chr]){
                return false
            }
        }
    }

    return brackets.length === 0
}

console.log(balanced("{[()]}"));  // true
console.log(balanced("{[(])}"));  // false
