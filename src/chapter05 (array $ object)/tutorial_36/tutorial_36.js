// ----------------------


console.log("Tutorial 36")


const names = ["hoangphuc", "phuc", "hoang", "huu"]

//index = 0; arr[index]

console.log(names[2])


//  edit array
names[2] = "update name"

console.log("before", names)


// --------thêm phần tử-------- 
// vào cuối mảng push()
names.push(true, 123, 678)
console.log("after",names)

// vào đầu mảng unshift()
names.unshift(false, 367, 908)
console.log("after",names)


// --------xoá phần tử--------
// xoá cuối mảng pop()
names.pop()
console.log(names)
// xoá phần tử đầu tiên shift()
names.shift()
console.log(names)