// ----------------------


console.log("Tutorial 33")

let globalVar = "I am global variable"

function show() {
    console.log(globalVar) // access succes
} 

show();
console.log(globalVar) // access succes


function sayHi() {
    let name1 = "hoangphuc"
    console.log("Hi", name1)

    if(true){
        let x = 10;
        const y = 20;
        console.log(x, y) // truy cập được 
    }

    console.log(x)
}

sayHi();
console.log(name1)  //Error:  name is not defined