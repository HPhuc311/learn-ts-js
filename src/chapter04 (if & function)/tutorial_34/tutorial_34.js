// ----------------------


console.log("Tutorial 34 Lab 02")

const tinhTrungBinh = (toan,van,anh) => {
    return (toan + van + anh) / 3
}

const xepLoai = (diemTb) => {
    if (diemTb >= 9){
        return "Xuất Sắc";
    } else if (diemTb >= 8 && diemTb < 9){
        return "Giỏi"
    } else if (diemTb >= 6.5 && diemTb < 8){
        return "Khá"
    } else {
        return "Trung Bình"
    }
}

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const diemTB = tinhTrungBinh(diemToan, diemVan, diemAnh)

console.log(`
    Điểm trung bình: ${diemTB}
    Xếp loại: ${xepLoai(diemTB)}
    `)
