var productName = document.getElementById("product-name");
var productPrice = document.getElementById("product-price");
var productCat = document.getElementById("product-cat");
var productDis = document.getElementById("product-disc");
var updBtn = document.getElementById('updbtn');
var addbtn = document.getElementById('addbtn');

var productContainer;
if (localStorage.getItem("productlist") == null) {
    productContainer = [];
}
else {
    productContainer = JSON.parse(localStorage.getItem("productlist"));
    display();
}

function addProduct() {
    if (validationinput()) {
        var product = {
        name: productName.value,
            price: productPrice.value,
            catageory: productCat.value,
            discription: productDis.value,
        }
        productContainer.push(product);
        localStorage.setItem("productlist", JSON.stringify(productContainer));
        display();
        clearproduct();
    }
    else {
        alert("input required");
    }
}
function clearproduct() {
    productName.value = "";
    productPrice.value = "";
    productCat.value = "";
    productDis.value = "";
}
function display() {
    var cartona = [];
    for (var i = 0; i < productContainer.length; i++) {
        cartona +=
            `<tr>
        <td>${i + 1}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].catageory}</td>
        <td>${productContainer[i].discription}</td>
        <td>
            <button class="btn btn-warning" onclick="updatedta(${i})">Update</button>
        </td>
        <td>
            <button class="btn btn-danger" onclick="deleteproduct(${i})">Delete</button>
        </td>
    </tr>`
    }
    document.getElementById("tabbody").innerHTML = cartona;
}

function validationinput() {
    if (productName.value != "" && productPrice.value != "" && productCat.value != "" && productDis.value != "") {
        return true;
    }
    else {
        return false;
    }
}
function deleteproduct(index) {
    productContainer.splice(index, 1);
    localStorage.setItem("productlist", JSON.stringify(productContainer));
    display();
}
// update function 
function updatedta(i) {
    productName.value = productContainer[i].name;
    productPrice.value = productContainer[i].price;
    productCat.value = productContainer[i].catageory;
    productDis.value = productContainer[i].discription;
    addbtn.style.display = "none";
    updBtn.style.display = "block";
    updBtn.value = i;
}
function update(i) {
    productContainer[i].name = productName.value;
    productContainer[i].price = productPrice.value;
    productContainer[i].catageory = productCat.value;
    productContainer[i].discription = productDis.value;
    updBtn.style.display = "none";
    addbtn.style.display = "block";
    localStorage.setItem("productlist", JSON.stringify(productContainer));
    clearproduct();
    display();
}