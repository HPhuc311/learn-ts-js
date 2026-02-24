// ----------------------


console.log("Tutorial 52")

const myBtnElement = document.getElementById("myBtn")
const myBtnElementBack = document.getElementById("myBtnBack")

const myText = document.getElementById("myText")

myBtnElement.addEventListener("click", () => {
    console.log("you cilck my btn ");
    myText.innerText = "Just the content with hoangphuc"
})

myBtnElementBack.addEventListener("click", () => {
    console.log("you cilck my btn ");
    myText.innerText = "Tutorial 52"
})


console.log('myBtnElement:', myBtnElement)
console.log('myText:', myText)