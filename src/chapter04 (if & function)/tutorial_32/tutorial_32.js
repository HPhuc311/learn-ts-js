// ----------------------


console.log("Tutorial 32")

// return 

const sum = (a,b,c) => {
    console.log('a,b,c:', a,b,c)
    if(typeof a !== 'number'){
         console.log ("run empty return")
        return;
    }
    console.log("run after")
    return a + b + c
}

console.log(sum("A",2,3))