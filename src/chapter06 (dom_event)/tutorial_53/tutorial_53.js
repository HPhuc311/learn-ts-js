// ----------------------


console.log("Tutorial 53")


myBtnColor = document.getElementById("myColor")
myBtnColorBack = document.getElementById("myColorBack")
myTextColor = document.getElementById("myText")

console.log('myBtnColorBack:', myBtnColorBack)
console.log('myTextColor:', myTextColor)
console.log('myBtnColor:', myBtnColor)


myBtnColor.addEventListener("click", () => {
    myTextColor.style.color = "red";
    myTextColor.style.backgroundColor = "blue";
})

myBtnColorBack.addEventListener("click", () => {
    myTextColor.style.color = "black";
    myTextColor.style.backgroundColor = "unset";
})

