// ----------------------


console.log("Tutorial 37")

const myClass = ["nam", "phuc", "phu", "lan", "trung"]

// length: chiều dài của mảng .length
// console.log('myClass:', myClass.length)

// for (let i = 0; i < myClass.length; i++) {
//     console.log('i:', i, "and value", myClass[i])
// }

// console.log("=================================")

// for (let i = 1; i <= myClass.length; i++) {
//     console.log('i:', i, "and value", myClass[i-1])
// }



// for-each

myClass.forEach(function(value, index){
    console.log(`value = ${value}, index ${index}`)
})

console.log("=================================")


// for-each (arrow function)

myClass.forEach((value, index) => {
    console.log(`value = ${value}, index ${index}`)
})


