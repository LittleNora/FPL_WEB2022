var ListProduct = [{
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/products/product1.png",
        category: 1
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        price: 10,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/products/product2.png",
        category: 1
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        price: 20,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/products/product3.png",
        category: 3
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        price: 50,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/products/product4.png",
        category: 4
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        price: 60,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/products/product5.png",
        category: 5
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        price: 15,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/products/product6.png",
        category: 6
    }
]
var ListCategory = [{
        id: 1,
        name: "breakfast",
        image: "./src/img/index/categories/breakfast.png"
    },
    {
        id: 2,
        name: "vegan",
        image: "./src/img/index/categories/vegan.png"
    },
    {
        id: 3,
        name: "meat",
        image: "./src/img/index/categories/meat.png"
    },
    {
        id: 4,
        name: "dessert",
        image: "./src/img/index/categories/dessert.png"
    },
    {
        id: 5,
        name: "lunch",
        image: "./src/img/index/categories/lunch.png"
    },
    {
        id: 6,
        name: "chocolate",
        image: "./src/img/index/categories/chocolate.png"
    }
];

function renderProducts(data, isShowPrice = false, limit = 0) {
    const products = document.querySelector('.products');
    if (Array.isArray(data)) {
        let htmls = data.reduce((acc, item, index) => {
                    if (limit) {
                        if (index >= limit) {
                            return acc += '';
                        }
                    }
                    return acc += `
                        <div class="product-item">
                            <a href="./detail.html?product-id=${item.id}">
                                <img src="${item.image}" alt="">
                                <span ${isShowPrice ? 'class="product-name"' : ''}>
                                    ${item.name}
                                </span>
                            </a>
                            ${!isShowPrice ? `
                            <div class="product-info">
                                <div class="product-info-item">
                                    <img src="./src/img/index/timer.png" alt="">
                                    <span>30 Minutes</span>
                                </div>
                                <div class="product-info-item">
                                    <img src="./src/img/index/forkknife.png" alt="">
                                    <span>Sweet</span>
                                </div>
                                </div>
                            </div>
                            ` : `
                            <span class="product-price">
                                $${item.price}
                            </span>
                            <button>Add To Cart</button>
                            `}
                        </div>`;
            }, '');
        products.innerHTML = htmls;
    }
}

var filterSelectElement = document. querySelector('#filter-selected');
if (filterSelectElement) {
    filterSelectElement.onchange = () => {
        let dataRender;
        switch (filterSelectElement.value) {
            case 'under30':
                dataRender = ListProduct.filter((product) => {
                    return product.price < 30;
                });
                break;
            case 'over30':
                dataRender = ListProduct.filter((product) => {
                    return product.price > 30;
                });
                break;    
            default:
                dataRender = ListProduct;
                break;
        }
        renderProducts(dataRender);
    }
}

function renderCategories(selector, isShowAll = false) {
    let categoriesElement = document.querySelector(selector);
    let htmls;
    if (isShowAll) {
        htmls = ListCategory.reduce((acc, category) => {
            return acc += /*html*/
            `
            <a href="./product.html?category-id=${category.id}" class="categories-item">
                <img src="${category.image}" alt="">
                <span>${category.name}</span>
            </a>
            `;
        },'');
    } else {
        htmls = ListCategory.reduce((acc, category) => {
            return acc += /*html*/
            `
            <li><a href="?category-id=${category.id}">${category.name}</a></li>
            `;
        }, '');
    }
    categoriesElement.innerHTML = htmls;
}

function renderByCategory() {
    let dataFromSearch = location.search.replace('?', '');
    let dataRender;
    if(dataFromSearch) {
        let categoryId = Number(dataFromSearch.split('=')[1]);
        dataRender = ListProduct.filter((product) => {
            return product.category === categoryId;
        });
        renderProducts(dataRender, true);
    }
}

function renderDetailProduct(selector) {
    let detailElement = document.querySelector(selector);
    if (detailElement) {
        let dataFromSearch = location.search.replace('?', '');
        let dataRender = ListProduct[0];
        if (dataFromSearch) {
            let productId = Number(dataFromSearch.split('=')[1]);
            dataRender = ListProduct.find((product) => {
                return product.id === productId;
            });
        }
        let htmls = /*html*/
        `
        <div class="product-detail-text">
            <h1>
                ${dataRender.name}
            </h1>
            <span>$${dataRender.price}</span>
            <p>
                ${dataRender.desc}
            </p>
            <div class="product-detail-add-cart">
                <input class="form-control" type="text" name="quantiy" placeholder="Quantity">
                <button>Add To Cart</button>
            </div>
        </div>
        <div class="product-detail-img">
            <img src="${dataRender.image}" alt="">
        </div>
        `;
        detailElement.innerHTML = htmls;
    }
}