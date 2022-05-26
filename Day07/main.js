// Bài 1:
// Xây dựng chương trình phân loại chuối theo độ dài
// - nếu chuối lớn hơn 10 cm và nhỏ hơn 15 cm thì hiển thị " chuối tạm được "
// - nếu chuối dưới 10 cm thì hiển thị " chuối nhỏ quá, không mua "
// - nếu chuối nhỏ hơn 0 thì hiển thị " nhập sai rồi "
// - nếu chuối lớn hơn 15 cm thì hiển thị " chuối khủng, mua ngay "

function bai1() {
    let bananaLength = Number(prompt('Nhập vào độ dài chuối (cm):'));
    if (Number.isNaN(bananaLength) || bananaLength < 0) {
        console.log('Nhập sai rồi');
    } else if (bananaLength < 10) {
        console.log('Chuối nhỏ quá, không mua');
    } else if (bananaLength >= 10 && bananaLength < 15) {
        console.log('Chuối tạm được');
    } else {
        console.log('Chuối khủng, mua ngay');
    }
}
// bai1();

// Bài 2: 
// Nhập vào từ bàn phím 1 số bất kỳ 
// Đếm xem có bao nhiêu số chia hết cho 2 tính từ 1 đến số nhập vào và hiển thị ra kết quả
function bai2() {
    let num = Number(prompt('Nhập vào một số bất kỳ:'));
    let count = 0;
    if (Number.isNaN(num)) {
        console.log('Nhập sai rồi');
    } else {
        if (num <= 0) {
            console.log('Bạn phải nhập số dương');
        } else {
            for (let i = 1; i <= num; i++) {
                if (i % 2 === 0) {
                    count++;
                }
            }
            console.log(`Có ${count} số từ 1 đến ${num} chia hết cho 2`)
        }
    }
}
// bai2();


// Bài 3:
// Nhập vào 1 số dương bất kỳ từ bàn phím

// Output:
// tính tổng các số vừa chia hết cho 3 vừa chia hết cho 5 và hiển thị ra 
// nếu số nhập vào là số âm thì hiển thị thông báo "Bạn phải nhập số dương"

function bai3() {
    let num = Number(prompt('Nhập vào một số dương bất kỳ:'));
    let sum = 0;
    if (!Number.isNaN(num)) {
        if (num <= 0) {
            console.log('Bạn phải nhập số dương');
        } else {
            for (let i = 1; i <= num; i++) {
                if (i % 15 === 0) {
                    sum += i;
                }
            }
            console.log(`Tổng các số vừa chia hết cho 3 vừa chia hết cho 5 là: ${sum}`);
        }
    } else {
        console.log('Nhập sai rồi');
    }
}

// bai3();

function tinhTong() {
    let a = 10,
        b = 5;
    let sum = a + b;
    console.log(sum);
}
