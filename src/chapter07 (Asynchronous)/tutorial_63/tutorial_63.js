// ----------------------


console.log("Tutorial 63")

//fetch => raw data (response) => object

const temp = fetch("http://localhost:8000/users")

temp
    .then(res => data.json())
    .then(data => console.log(data));