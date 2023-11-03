
let product = { productID: "", productName: "", productIMG: "", price: "", type: "" };

var productArray = [
    { productID: "P0001", productName: "Bburago F1 Ferrari F1-75 #16 (Charles Leclerc) 2022 Formula 1 Model Car 1/43", productIMG: "ferrari/P0001.png", brand: "Ferrari", price: "£11.99", type: "featured" },
    { productID: "P0002", productName: "Bburago Ferrari Race & Play F8 Tributo 1/43 B18-36054", productIMG: "ferrari/P0002.png", brand: "Ferrari", price: "£6.50", type: "featured" },
    { productID: "P0003", productName: "Bburago Scuderia F1 Ferrari 2022 - SF21 #16 (Charles Leclerc) 2022 Model Car 1/43", productIMG: "ferrari/P0003.png", brand: "Ferrari", price: "£11.99", type: "featured" },
    { productID: "P0004", productName: "Maisto Ferrari Enzo Kit 1/24", productIMG: "ferrari/P0004.png", brand: "Ferrari", price: "£22.00", type: "featured" },
    { productID: "P0005", productName: "Bburago Ferrari Race And Play Monza Sp-1 1/43 Toy Car", productIMG: "ferrari/P0005.png", brand: "Ferrari", price: "£7.95", type: "featured" },
    { productID: "P0006", productName: "Maisto Premium RC F1 Ferrari SF90 2019 Season Leclerc 1/24", productIMG: "ferrari/P0006.png", brand: "Ferrari", price: "£35.00", type: "featured" },
    { productID: "P0007", productName: "Bburago Ferrari Racing 488 Challenge (Formula Ferrari Racing 2017) 1/24 Model Car", productIMG: "ferrari/P0007.png", brand: "Ferrari", price: "£25.00", type: "featured" },
    { productID: "P0008", productName: "Bburago Ferrari Race & Play F12 Tdf 1/24", productIMG: "ferrari/P0008.png", brand: "Ferrari", price: "£20.00", type: "featured" },
    { productID: "P0009", productName: "Bburago Ferrari Signature SF90 Stradale 1/18 Model Car ", productIMG: "ferrari/P0009.png", brand: "Ferrari", price: "£81.99", type: "featured" },
    { productID: "P0010", productName: "Bburago Ferrari Race & Play 488 GTB 1/24 Model Car", productIMG: "ferrari/P0010.png", brand: "Ferrari", price: "£22.00", type: "featured" },
    { productID: "P0011", productName: "Bburago Ferrari Race & Play Laferrari 1/24", productIMG: "ferrari/P0011.png", brand: "Ferrari", price: "£20.00", type: "featured" },
    { productID: "P0012", productName: "Bburago Ferrari Race And Play 488 Pista 1/24 Model Car ", productIMG: "ferrari/P0012.png", brand: "Ferrari", price: "£22.00", type: "featured" },

];
localStorage.setItem('product', JSON.stringify(productArray));







function getIndex(productID) {
    productID = String(productID);
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].productID == productID) {
            return i;
        }
    }
}

function closeProductInfo() {
    document.getElementById("productInfor-container").style.display = "none";
}

function showProductInfo(productID) {
    productID = String(productID);
    var i = getIndex(productID)
    var str2 = "";
    str2 += `<div id="productInfor">
                            <div class="image-container">
                                <img src="./images/product/${productArray[i].productIMG}" class="product-img">
                            </div>
                            <div class="close-button" onclick="closeProductInfo()">
                                <p>+</p>
                            </div>
                            <div class="infor-container">
                                <h2 class="product-title">${productArray[i].productName}</h2>
                                </h2>
                                <h4 class="product-price">Price: ${productArray[i].price}</h4>
                                <h4 class="quantity">quantity</h4>
                                <button class="quantity-decrease">-</button>
                                <input type="text" value="1" class="quantity-number">
                                <button class="quantity-increase">+</button>
                                <button class="addtocart">Add to cart</button>
                            </div>
                        </div>`;
    document.querySelector(".productInfor-container").innerHTML = str2;
    document.getElementById("productInfor-container").style.display = "block";
}

var showFeaturedProduct = document.getElementById("featured");
showFeaturedProduct.onclick = function () {
    var str = "";
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].type == "featured") {
            str += `<li class= "product" id="${productArray[i].productID}" onclick="showProductInfo('${productArray[i].productID}')">
                            <div class="product-img-container">
                                <img src="./images/product/${productArray[i].productIMG}" alt="" class="product-img">
                                <div class="product-botton" >
                                    <div class="icon"><ion-icon name="cart"></ion-icon></div>
                                    <div class="view-botton">view</div>
                                </div>
                            </div>
                        </a>
                        <div class="product-infor">
                            <h4 class="product-title"><a href="">
                                ${productArray[i].productName}
                                </a>
                            </h4>
                            <p class="product-brand">${productArray[i].brand}</p>
                            <p class="product-price">${productArray[i].price}</p>
                        </div>
                </li >`;

        }
        document.querySelector(".specialProducts-list").innerHTML = str;
    }

}

