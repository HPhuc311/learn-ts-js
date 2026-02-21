// ----------------------


console.log("Tutorial 44 Lab")

const products = [
    {
        name: "T-shirt",
        price: 200,
        inStock: true
    },
    {
        name: "Shirt",
        price: 250,
        inStock: false
    },
    {
        name: "Trouser",
        price: 200,
        inStock: true
    },
    {
        name: "Skirt",
        price: 300,
        inStock: false
    },
    {
        name: "Shoes",
        price: 200,
        inStock: true
    },
    {
        name: "Short",
        price: 200,
        inStock: false
    },
    {
        name: "Dress",
        price: 200,
        inStock: true
    }
]
// =============================================

console.log("In ra tên sản phẩm đầu tiên")

console.log(products[0].name)

// =============================================

console.log("Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm")

products[1].price = 150;
console.log('products:', products)

// =============================================

console.log("Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm")

products.push({
    name: "Blue-Dress",
    price: 400,
    inStock: true
})
console.log('products:', products)

// =============================================

console.log("Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm")

products.pop()
console.log('products:', products)

// =============================================

console.log("Dùng forEach() để in ra tất cả tên sản phẩm")

products.forEach((item, index) => {
    console.log('products:', item)
})

// =============================================

console.log("Dùng map() để tạo mảng mới chỉ chứa giá sản phẩm.")

const priceProduct = products.map((item, index) => {
    return item.price
})

console.log(priceProduct)

// =============================================

console.log("Dùng filter() để lấy các sản phẩm còn hàng(inStock = true)")

const inStockProducts = products.filter((item, index) => item.inStock === true)
console.log('inStockProducts:', inStockProducts)

// =============================================

console.log("Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên")

for (let key in products[0]) {
    console.log(key, products[0][key]);
}


// const v1 = {
//     name: "Dress",
//     price: 200,
//     inStock: true
// }

// for (let value of Object.values(v1)) {
//     console.log(value);
// }

