// ----------------------


console.log("Tutorial 65")

const greeting = (name, hoidanit) => {
    console.log("Xin chao", name)
    hoidanit()
}



const hello = () => {
    console.log("Call back.......")
}
const Hi = () => {
    console.log("Hi back.......")
}




greeting("A", hello)