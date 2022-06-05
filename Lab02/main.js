// Tạo 1 mảng userList để chứa các tên tài khoản người dùng, mảng ban đầu  2 phần tử [ "tiennh@fpt.edu.vn" , "datlt@fpt.edu.vn"]
let userList = ["tiennh@fpt.edu.vn", "datlt@fpt.edu.vn"];

// viết 1 hàm showMessage để thực hiện chức năng hiển thị ra thông báo. hàm này sẽ nhận vào 1 tham số là message, bên trong hàm sẽ log ra message đưa vào khi gọi hàm 
function showMessage(message) {
    console.log(message);
}

// viết 1 hàm showUser thực hiện chức năng  hiển thị ra tất cả  tài khoản trong mảng
function showUser() {

    // kiểm tra xem mảng userList có phải là mảng rỗng hay không
    if (userList.length === 0) {

        // nếu là mảng rỗng thì gọi hàm showMessage và truyền vào giá trị để hiển thị ra như sau: "không có user để hiển thị"
        showMessage('Không có user để hiển thị');

    } else {

        // nếu mảng có dữ liệu thì hiển thị tất cả tài khoản ra table trong html (2 cột, 1 cột số thứ tự và 1 cột tên tài khoản)
        let tableHeadingHtmls = `
        <tr>
            <th>STT</th>
            <th>Tên tài khoản</th>
        </tr>
        `;
        // let tableContentHtmls = userList.map((user, index) => {
        //     return `
        //     <tr>
        //         <td>${index}</td>
        //         <td>${user}</td>
        //     </tr>
        //     `;
        // });
        let tableContentsHtmls = userList.reduce((acc, user, index) => {
            return acc += `
                <tr>
                     <td>${index}</td>
                     <td>${user}</td>
                 </tr>
            `;
        }, tableHeadingHtmls);
        let tableElement = document.createElement('table');
        tableElement.setAttribute('border', '1');
        tableElement.setAttribute('width', '100%');
        // tableElement.innerHTML = tableHeadingHtmls + tableContentHtmls.join('');
        tableElement.innerHTML = tableContentsHtmls;
        document.querySelector('.container').appendChild(tableElement);
    }
}



// Tạo 1 form thêm mới tài khoản (gồm 1 input để nhập tên tài khoản và 1 button để submit)
let formAddUser = document.querySelector('#form-add-user');
if (formAddUser) {

    // viết 1 hàm addUser để thực hiện việc thêm tài khoản mới
    function addUser(value) {
        userList.push(value);
    }

    let inputAddUser = formAddUser.querySelector('input');
    let errorMessAddUser = formAddUser.querySelector('.form-message');

    formAddUser.onsubmit = (e) => {
        e.preventDefault();
        if (inputAddUser.value === '') {

            // kiểm tra nếu không nhập tên tài khoản thì thông báo lỗi lên màn hình
            errorMessAddUser.innerHTML = 'Hãy nhập vào tên tài khoản';

        } else if (inputAddUser.value.length < 5) {

            // kiểm tra nếu tên tài khoản nhỏ hơn 5 ký tự thì thông báo lỗi
            errorMessAddUser.innerHTML = 'Tên tài khoản không được nhỏ hơn 5 ký tự';

        } else {
            errorMessAddUser.innerHTML = '';

            // nếu dữ liệu nhập vào hợp lệ thì cho phép thêm vào mảng userList
            addUser(inputAddUser.value);

            // sau khi thêm xong gọi lại hàm showUser để hiển thị lại dữ liệu trong table
            showUser();
        }
    }
}

// viết 1 hàm removeUser để thực hiện việc xóa tài khoản
function removeUser() {

    // nhập tên tài khoản cần xóa từ bàn phím
    let userRemove = prompt('Nhập tên tài khoản cần xóa');

    // nếu tìm thấy tên tài khoản cần xóa thì
    if (userList.includes(userRemove)) {
        let indexRemove = userList.indexOf(userRemove);

        // thực hiện việc xóa tên  tài khoản đó khỏi mảng
        userList.splice(indexRemove, 1);

        // gọi ra hàm showMessage để hiển thị thông báo "Xoá thành công"
        showMessage('Xóa thành công');

        // hiển thị lại dữ liệu trong mảng sau khi đã xóa sản phẩm thành công
        showUser();

    } else {

        // nếu không tìm thấy thì gọi hàm showMessage để hiển thị thông báo "không tìm thấy sản phẩm cần xóa"
        showMessage('Không tìm thấy tài khoản cần xóa');

    }
}

// viết 1 hàm updateUser thực hiện cập nhật tên tài khoản
function updateUser() {

    // nhập tên  tài khoản cần cập nhật từ bàn phím
    let userUpdate = prompt('Nhập vào tên tài khoản muốn cập nhật');

    // nếu tìm thấy thì 
    if (userList.includes(userUpdate)) {
        let userUpdateContent = prompt('Nhập vào nội dung muốn cập nhật');
        let indexUpdate = userList.indexOf(userUpdate);

        // thực hiện cập nhật giá trị tên sản phẩm đó
        userList.splice(indexUpdate, 1, userUpdateContent);

        // Sau khi cập nhật xong gọi ra hàm showMessage để hiển thị thông báo "Cập nhật thành công"
        showMessage('Cập nhật thành công');

        // hiển thị lại dữ liệu trong mảng sau khi đã cập nhật thành công
        showUser();

    } else {
        
        // nếu không tìm thấy thì  gọi hàm showMessage để thông báo "không tìm thấy  khoản cần cập nhật"
        showMessage('Không tìm thấy tài khoản cần cập nhật');

    }
}

// viết 1 hàm removeAll
function removeAll() {

    // thực hiện việc xóa toàn bộ  tài khoản trong mảng
    userList.splice(0, userList.length);

    //sau  khi xoá xong gọi ra hàm showMessage để hiển thị thông báo "Đã xoá hết dữ liệu"
    showMessage('Đã xóa hết dữ liệu');

}