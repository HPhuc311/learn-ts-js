// Excrise

const fullName = "Hoang Phuc";

let birthDay = 2004;

isStudent =  true;

// tính năm hiện tại 
const today = new Date();
const currentYear = today.getFullYear();
const calculatedAge = currentYear - birthDay


console.log(`Tên: ${fullName} Tuổi: ${calculatedAge} Sinh viên: ${isStudent}`)