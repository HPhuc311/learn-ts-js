// ----------------------


console.log("Tutorial 42")


const person = {
    name: "hoangphuc",
    age: 25,
}



console.log('person before:', person)
console.log('person:', person.name)
console.log('person:', person.age)


person.address = "tayninh"
console.log('person after:', person)


delete person.name;
console.log('person after:', person)