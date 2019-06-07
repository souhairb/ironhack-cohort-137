const myShopCart = (function () {
  "use strict";

  var productList, productsTotalPrice;

  /**
   * calculate the sum all product*qty
   */
  function setProductsTotal() {
    const prices = document.querySelectorAll(".product.row .total-price .val");
    const sum = Array.from(prices).reduce((acc, currPrice) => { // convert the nodeList to a regular array !!!
      acc += Number(currPrice.textContent); // add iterated product's price to the accumulator
      return acc; // return the updated accumulator
    }, 0);

    productsTotalPrice.textContent = sum; // write the total price inside the span
  }

  /**
   * update a product-row total price
   * @todo update the total for ALL products 
   * @author gui
   * @param {Object} - the event object
   * @return {undefined}
   */
  function updateProductTotal(evt) {
    console.log(evt.target);
    const parent = evt.target.parentElement; // get the product row
    const priceU = Number(parent.querySelector(".unit-price .val").textContent); // get the unit price as a number
    const priceT = parent.querySelector(".total-price .val"); // get the span to display the result of qty * priceU
    priceT.textContent = priceU * Number(evt.target.value); // do the math ... easy
    setProductsTotal();
  }
  // souhair => coller juste avant les appenchild
  // quantity.oninput = updateProductTotal;
  // button.onclick = deleteProductRow;

  /**
   * removes a product-row from it's products list parent element
   * @todo update the total for ALL products 
   * @author gui
   * @param {Object} - the event object
   * @return {undefined}
   */
  function deleteProductRow(evt) {
    console.log(evt.target);
    evt.target.parentElement.remove();
    setProductsTotal();
  }

  function appendProduct(infos) {
    // step 1 : create all row's elements 
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
    quantity.className = "quantity";
    quantity.value = 0;
    priceTotal.className = "total-price";
    button.className = "btn delete";
    button.textContent = "delete";
    // step 3 : add extra markup
    price.innerHTML = `<span class="currency">$</span><span class="val">${infos.price}</span>`;
    priceTotal.innerHTML = '<span class="currency">$</span><span class="val">0</span>';
    // step 4 : add event listeners for this row ...
    // A when the quantity gets an input => update the unit*price
    quantity.oninput = updateProductTotal;
    // B when the button is clicked, delete the full row
    button.onclick = deleteProductRow;
    // final step : build a product row
    row.appendChild(label);
    row.appendChild(price);
    row.appendChild(quantity);
    row.appendChild(priceTotal);
    row.appendChild(button);
    productList.appendChild(row);
    console.log(row);
  }

  function appendProduct2(infos) {
    
      function getHTMLString(str, label, price) {
        return `
        <div class="row product">
          <span class="label">${label}</span>
          <span class="unit-price">
            <span class="currency">$</span>
            <span class="val">${price}</span>
          </span>
          <input type="number" class="quantity" value="0">
          <span class="total-price">
            <span class="currency">$</span>
            <span class="val">0</span>
          </span>
          <button class="btn delete">delete</button>
        </div>
      `;
      }
      // 1 => get a html string containing new product infos
      const html = getHTMLString`${ infos.name } ${ infos.price }`.trim();
      // 2 => create a placeholder template element
      const template = document.createElement('template');
      // 3 => the template's content is the generated HTML
      template.innerHTML = html;
      // 4 => the targeted node is the template's first child
      const productRow = template.content.firstChild;
      console.log("built row", productRow); // now we have a product row
      // 5 => add the event listeners
      productRow.querySelector(".quantity").oninput = updateProductTotal;
      productRow.querySelector(".btn.delete").onclick = deleteProductRow;
      // 6 => append the row in the products list
      productList.appendChild(productRow);
  }


  function createProduct(evt) {
    evt.preventDefault(); // prevents the form submission to refresh the page
    // above : this would be the default browser behaviour.
    const nameElement = document.getElementById("new_product_name");
    const priceElement = document.getElementById("new_product_price");
    // appendProduct({ name: nameElement.value, price: priceElement.value });
    appendProduct2({ name: nameElement.value, price: priceElement.value });
  }

  window.onload = function () { // there is only one 'load' event per document
    const btnCreateProduct = document.getElementById('btn_new_product');
    productList = document.getElementById("list_products");
    productsTotalPrice = document.querySelector("#products_total_price .val");
    btnCreateProduct.onclick = createProduct;
  };

}());