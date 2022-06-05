// cho 1 mảng dữ liệu như sau
products = [{
        id: 1,
        name: "iPhone ",
        image: "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-5_4.jpg ",
        status: true,
    },
    {
        id: 2,
        name: "xiaoMi ",
        image: "https://image.cellphones.com.vn/358x/media/catalog/product/x/i/xiaomi-12-pro_arenamobiles.jpg ",
        status: true,
    },
    {
        id: 3,
        name: "samsung ",
        image: "https://image.cellphones.com.vn/358x/media/catalog/product/g/a/galaxy-z-fold3-kv_5g__1p_cmyk_1.jpg ",
        status: false,
    }
]

// Yêu cầu: 

// hiển thị thông tin sản phẩm ra html (ngoại trừ id)
const productsElement = document.querySelector('.products');
function showProducts() {
    let htmls = products.reduce(function(acc, productItem) {
        return acc +=  `
            <div class="product-item">
                <img src="${productItem.image}">
                <h3>${productItem.name}</h3>
                <p>${productItem.status ? 'Còn hàng' : 'Hết hàng'}</p>
            </div>
        `;
    },'');
    productsElement.innerHTML = htmls;
}