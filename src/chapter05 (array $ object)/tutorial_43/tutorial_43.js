// ----------------------


console.log("Tutorial 43")

const sv1 = {
    username: "hoangphuc",
    age: 23,
}
const sv2= {
    username: "hoangphuc1",
    age: 234,
}
const sv3 = {
    username: "hoangphuc2",
    age: 253,
}


const sinhvien = [sv1, sv2, sv3]
console.log('sinhvien:', sinhvien)


// sinhvien.forEach((item,index) => {
//     console.log(`index = ${index}, name = ${item.username}`)
    
// })

// for...in: duyệt qua thuộc tính 
// for...of: duyệt qua giá trị

const person = {
    email: "hoangphhuc311tn@gmail.com",
    address: "tayninh",                     
    phone: 5,
}


// for (let key in person){
//     console.log('key:', key, person[key])

// }

for (let value of Object.values(person)) {
    console.log(value);
}

// for (let [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }