let form1 = document.querySelector('#form-1');
if (form1) {
    let username = document.querySelector('input[name="username"]');
    let password = document.querySelector('input[name="password"]');
    let errorMessageUsername = username.nextElementSibling;
    let errorMessagePassword = password.nextElementSibling;

    form1.onsubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        if (username.value.trim() === '') {
            errorMessageUsername.innerHTML = 'Phải nhập username';
            username.style.borderColor = 'red';
            isValid = false;
        } else if (username.value.length < 5) {
            username.style.borderColor = 'red';
            errorMessageUsername.innerHTML = 'Username không được nhỏ hơn 5 ký tự';
            isValid = false;
        } else {
            username.style.borderColor = '#37A9CD';
            errorMessageUsername.innerHTML = '';
        }

        if (password.value.trim() === '') {
            password.style.borderColor = 'red';
            errorMessagePassword.innerHTML = 'Phải nhập password';
            isValid = false;
        } else {
            password.style.borderColor = '#37A9CD';
            errorMessagePassword.innerHTML = '';
        }

        if (isValid) {
            let formValues = {};
            formValues[username.name] = username.value;
            formValues[password.name] = password.value;
            let contentAlert = '';
            for (const key in formValues) {
                contentAlert += `${key}: ${formValues[key]} \n`;
            }
            alert(contentAlert);
        }
    }
}

let form2 = document.querySelector('#form-2');
if (form2) {
    let productName = document.querySelector('#product-name');
    let productQuantity = document.querySelector('#quantity');
    let productPrice = document.querySelector('#product-price');
    let errorMessageQuantity = productQuantity.nextElementSibling;

    form2.onsubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        if (productQuantity.value.trim() === '') {
            errorMessageQuantity.innerHTML = 'Phải nhập số lượng';
            productQuantity.style.borderColor = 'red';
            isValid = false;
        } else if (isNaN(productQuantity.value)) {
            errorMessageQuantity.innerHTML = 'Số lượng phải là số';
            productQuantity.style.borderColor = 'red';
            isValid = false;
        } else if (productQuantity.value < 0) {
            productQuantity.style.borderColor = 'red';
            errorMessageQuantity.innerHTML = 'Số lượng không được nhỏ hơn 0';
            isValid = false;
        } else {
            productQuantity.style.borderColor = '#37A9CD';
            errorMessageQuantity.innerHTML = '';
        }

        if (isValid) {
            let showProductName = document.querySelector('#show-prdName');
            let showProductQuantity = document.querySelector('#show-prdQuantity');
            let showProductPrice = document.querySelector('#show-prdPrice');
            let showAmount = document.querySelector('#show-amount');

            showProductName.innerHTML = productName.innerHTML;
            showProductQuantity.innerHTML = productQuantity.value;
            showProductPrice.innerHTML = productPrice.innerHTML;
            showAmount.innerHTML = Number(productQuantity.value) * Number(productPrice.innerHTML);
        }


    }
}

let form3 = document.querySelector('#form-3');
if (form3) {
    let username = document.querySelector('input[name="username"]');
    let errorMessageUsername = username.nextElementSibling;
    let userList = ['sontv', 'thienth', 'datlt'];
    form3.onsubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        if (username.value.trim() === '') {
            errorMessageUsername.innerHTML = 'Phải nhập username';
            username.style.borderColor = 'red';
            isValid = false;
        } else if (!isNaN(username.value)) {
            errorMessageUsername.innerHTML = 'Username không phải là số';
            username.style.borderColor = 'red';
            isValid = false;
        } else if (username.value.length < 2) {
            username.style.borderColor = 'red';
            errorMessageUsername.innerHTML = 'Username không được nhỏ hơn 2 ký tự';
            isValid = false;
        } else {
            username.style.borderColor = '#37A9CD';
            errorMessageUsername.innerHTML = '';
        }

        if (isValid) {
            userList.push(username.value);
            alert(`Mảng userList: ${userList.join(', ')}`);
        }
    }
}