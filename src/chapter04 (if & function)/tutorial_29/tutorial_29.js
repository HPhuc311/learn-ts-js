// ----------------------


console.log("Tutorial 29")


// for (let i = 1; i < 10; i++){
//     console.log('i:', i)
//     if (i === 5){
//         break;
//     }
// }

for (let i = 1; i < 10; i++){
    if (i === 5){
        continue; // thoát ra lần lặp hiện tại, để thực hiện lần lặp tiếp theo 
    }
    console.log('i:', i)
}