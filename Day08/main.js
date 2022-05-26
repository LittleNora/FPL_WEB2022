// Bài 1:
function bai1() {
    // Khai báo 1 mảng username gồm 7 tên tài khoản 
    let userList = ['vinhndq', 'thinhnv', 'quangnv', 'quanla', 'truongnx', 'duongna', 'truongnq'];

    // Hiển thị toàn bộ tên tài khoản 
    for (const user of userList) {
        console.log(user);
    }

    // Thêm mới tài khoản "sontv8" vào
    userList.push('sontv8');

    // Xóa đi phần tử đầu tiên
    userList.shift();

    // Xóa đi phần tử cuối cùng
    userList.pop();

    // Xóa đi phần tử có vị trí index = 4
    userList.splice(4, 1);

    console.log(userList);

}


// Bài 2:
function bai2() {
    // Khai báo 1 mảng users bao gồm các phần tử sau
    // sontv8
    // datlt34
    // thienth
    // tiennh21
    // minhdq8
    let users = ['sontv8', 'datlt34', 'thienth', 'tiennh21', 'minhdq8'];

    // Yêu cầu:
    // nhập vào tên users từ bàn phím
    let userInput = prompt('Hãy nhập vào user muốn tìm kiếm');

    // kiểm tra xem users có tồn tại trong mảng hay không
    if (users.includes(userInput)) {
        // nếu user có tồn tại thì hiển thị : tài khoản đăng nhập: [tên tài khoản vừa nhập]
        console.log(`Tài khoản đăng nhập: ${userInput}`);
    } else {
        // nếu user không tồn tại thì hiển thị: tài khoản bạn vừa nhập không tồn tại
        console.log(`Tài khoản bạn vừa nhập không tồn tại`);
    }

    // thêm mới user dungna vào trong mảng rồi hiển thị ra toàn bộ tên user trong mảng
    users.push('dungna');
    console.log(users);

}

// Bài 3:
function bai3() {
    // Tạo 1 mảng numbers (mảng ban đầu là mảng rỗng)
    // Sử dụng vòng lặp để thêm 5  số vào mảng (số nhập vào từ bàn phím)
    // Hiển thị ra giá trị của mảng
    let numbers = [];
    for (let i = 0; i < 5; i++) {
        let numberInput;
        do {
            numberInput = Number(prompt(`Hãy nhập giá trị tại index ${i}:`));
        } while (isNaN(numberInput));
        numbers.push(numberInput);
    }

    console.log(numbers);

}


// Bài 4:
function bai4() {
    // Tạo 1 mảng số nguyên
    let numbers = [];
    let isEvenArr = true;

    for (let i = 0; i < 5; i++) {
        let numberInput;
        do {
            numberInput = Number(prompt(`Hãy nhập giá trị tại index ${i}:`));
        } while (isNaN(numberInput));
        numbers.push(numberInput);
    }

    // Viết chương trình thực hiện yêu cầu sau
    for (const number of numbers) {
        if (number % 2 !== 0) {
            isEvenArr = false;
            break;
        }
    }


    // let isEvenArr = numbers.every(function(number) {
    //     return number % 2 === 0;
    // })
    if (isEvenArr) {
        // Nếu tất cả các phần từ của mảng là số chẵn thì in ra "Yes" 
        console.log('Yes');
    } else {
        // Nếu không in ra "No"
        console.log('No');
    }
}


// Bài 5:
function bai5() {

    // Cho 1 mảng số nguyên gồm các phần tử [ 1, 4, 5, 7, 22, 15, 9, 8]
    let numbers = [1, 4, 5, 7, 22, 15, 9, 8];

    // Tạo 1 mảng mới có tên evenData
    let evenData = [];

    // Yêu cầu:
    // Lấy ra tất cả các số chẵn trong mảng bên trên đưa vào trong mảng evenData
    for (const number of numbers) {
        if (number % 2 === 0) {
            evenData.push(number);
        }
    }

    console.log(evenData);
}


// Bài 6: 
// Tạo 1 mảng tên users để chứa tên tài khoản [sontv, thienth, datlt, minhdq]
let users = ['sontv', 'thienth', 'datlt', 'minhdq'];

// Viết ra 3 hàm thực hiện 3 chức năng sau
// hiển thị ra tất cả user có trong mảng
function showUser() {
    for (const user of users) {
        console.log(user);
    }
}

// thêm mới user vào mảng
function addUser() {
    users.push('vinhndq');
}

// xóa toàn bộ user có trong mảng
function delAllUser() {
    users.splice(0, users.length);
}