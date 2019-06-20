var myModule = (function () { // wrap our code in a IIFE to avoid writing our variables/functions in the global scope

  const basePrice = 10;

  const state = { // i've merged var ingredients in the state :)
    pepperonni: { isActive: true, name: 'Pepperonni', price: 1 },
    mushrooms: { isActive: true, name: 'Mushrooms', price: 1 },
    greenPeppers: { isActive: true, name: 'Green Peppers', price: 1 },
    whiteSauce: { isActive: true, name: 'White sauce', price: 3 },
    glutenFreeCrust: { isActive: false, name: 'Gluten-free crust', price: 5 }
  };

  function renderPrice() {
    var total = 0;
    for (let topping in state) {
      if (state[topping].isActive) total += state[topping].price;
    }
    document.querySelector(".panel.price strong").textContent = "$" + (basePrice + total);
  }

  function renderIngredient(ingredient, targetClass) {
    document.querySelectorAll("." + targetClass).forEach(element => {
      if (state[ingredient].isActive) element.style.visibility = "visible";
      else element.style.visibility = "hidden";
    });
  }

  function renderCrust() {
    document.querySelector(".crust").classList.toggle("crust-gluten-free");
  }

  function filterIngredient(evt) {
    const btn = evt.target || evt.srcElement; // cross browser way to get the event source
    const ingredient = btn.getAttribute("data-ingredient"); // I've add a custom attribute to the button in HTML 
    btn.classList.toggle("active"); // add OR remove active class depending on the class absence/presence
    state[ingredient].isActive = !state[ingredient].isActive; // use direct indexing to access the 
    if (ingredient === "glutenFreeCrust") renderCrust();
    else renderIngredient(ingredient, btn.getAttribute("data-css"));
    renderPrice(ingredient);
  }

  function start() {
    document.querySelectorAll('.btn').forEach(btn => btn.onclick = filterIngredient);
  }

  window.addEventListener("DOMContentLoaded", start);


}());