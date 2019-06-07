const myShopCart = (function () {
  "use strict";

  var productList;

  function appendProduct(infos) {
    // step 1 : create all row elements 
    const row = document.createElement("div");
    const label = document.createElement("span");
    const price = document.createElement("span");
    const quantity = document.createElement("input");
    const priceTotal = document.createElement("span");
    const button = document.createElement("button");
    // step 2 : setup row's elements
    quantity.type = "number";
    row.className = "row product";
    label.className = "label";
    label.textContent = infos.name;
    price.className = "unit-price";
    price.textContent = infos.price;
    quantity.className = "quantity";
    quantity.value = 0;
    priceTotal.className = "total-price";
    button.className = "btn delete";
    button.textContent = "delete";
    // step 3 : add extra markup
    price.innerHTML = '<span class="currency">$</span><span class="val">0</span>';
    // build a product row
    row.appendChild(label);
    row.appendChild(price);
    row.appendChild(quantity);
    row.appendChild(priceTotal);
    row.appendChild(button);
    productList.appendChild(row);
    console.log(row);
  }

  function createProduct(evt) {
    evt.preventDefault(); // prevents the form submission to refresh the page
    // above : this would be the default browser behaviour.
    const nameElement = document.getElementById("new_product_name");
    const priceElement = document.getElementById("new_product_price");
    console.log(nameElement.value, priceElement.value);
    appendProduct({ name: nameElement.value, price: priceElement.value });
  }

  window.onload = function () { // there is only one 'load' event per document
    const btnCreateProduct = document.getElementById('btn_new_product');
    productList = document.getElementById("list_products")
    console.log("ready to rock")
    btnCreateProduct.onclick = createProduct;
    // btnCreateProduct.addEventListener("click", createProduct);
  };

}());