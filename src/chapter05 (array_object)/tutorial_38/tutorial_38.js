// ----------------------


console.log("Tutorial 38")


const scores = [10, 9, 8, 7, 6, 5, 4];

// read data
// scores.forEach((value, index)=>{
//     console.log(`value = ${value}, index = ${index}`)
// })

// modify data
const scores2 = scores.map((value, index) => {
    return value * 2 
})                                   
console.log('scores:', scores2)