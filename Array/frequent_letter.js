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
