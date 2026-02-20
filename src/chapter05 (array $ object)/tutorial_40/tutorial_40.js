// ----------------------


console.log("Tutorial 40")


const ages = [10, 20, 30, 40, 12, 11, 19, 50, 60];

const agesX2 = ages.map((item, index) => {
    return item * 2
})

const agesX18 = ages.filter((item, index) => {
    return item > 18 // true 
})


console.log(`original: ${ages}`)
console.log(`agesX2: ${agesX2}`)


console.log('agesX18:', agesX18)