
function currency(num) {

    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
/*ADMIN*/
function hello(){
    var user = JSON.parse(localStorage.getItem('userlogin'));
    document.getElementById('hello').innerHTML= user.fullname + '<button onclick="logout()">Đăng xuất</button>';
}
function logout(){
    localStorage.removeItem('userlogin');
    localStorage.removeItem('cart');
    location.href='../index.html';
}
// function showProductList(vitri){
//     var productArray = JSON.parse(localStorage.getItem('product'));
//     var s='<tr><th>#ID</th><th>Ảnh</th><th>TÊN SẢN PHẨM</th><th>THƯƠNG HIỆU</th><th>GIÁ</th><th></th></tr>';
//     var dem = 0;
//     for(var i=vitri;i<productArray.length;i++){
//         s+='<tr>'+
//             '<td>'+productArray[i].productId+'</td>'+
//             '<td><img src="../'+productArray[i].img+'"></td>'+
//             '<td>'+productArray[i].name+'</td>'+
//             '<td>'+productArray[i].brand.toUpperCase()+'</td>'+
//             '<td>'+currency(productArray[i].price)+'</td>'+
//             '<td>'+
//             '<button class="delete" onClick="deleteproduct(\''+productArray[i].productId+'\')">&times;</div>'+
//             '<button class="change" onClick="showchangeproductbox(\''+productArray[i].productId+'\')">Sửa</div>'+
//             '</td>'+
//             '</tr>';
//         dem++;
//         if(dem==10){
//             break;
//         }
//     }
//     document.getElementById('productlist').innerHTML=s;
//     setPagination();
// }
function changeimg(input){
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('imgafter').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
}
function changeimgadd(input){
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('imgadd').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
}
function closechangebox(){

    document.getElementById('modal1').style.display = 'none';
}
function addProduct(){
    var productArray = JSON.parse(localStorage.getItem('product'));
    var productid = productArray[0].productId+1;
    var productname = document.getElementById('productname');
    var brand = document.getElementById('brand');
    var price = document.getElementById('productprice');
    if(!brand.value || !productname.value || !price.value){
        customAlert('Bạn chưa nhập đủ thông tin sản phẩm','warning');
        return false;
    }
    if(isNaN(Number(price.value))){
        customAlert('Giá không hợp lệ','warning');
        return false;
    }
    var producttemp = {productId: productid, brand: brand.value, img:'images/product/temp.jpg', name: productname.value, price: price.value};
    productArray.unshift(producttemp);
    localStorage.setItem('product',JSON.stringify(productArray));
    showProductList(0);
    customAlert('Thêm sản phẩm thành công','success');
}