// ----------------------


console.log("Tutorial 62")

// console.log("1")



// console.log("3")

const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2")
            // return
            resolve("hello")
        }, 5000)
    })
}