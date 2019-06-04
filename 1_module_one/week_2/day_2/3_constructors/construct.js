class Product {
    constructor(price, ref) { // only one 
        this.price = price;
        this.ref = ref;
    }

    getProductInfos() {
        return "the product costs " + this.price + " euros (" + this.ref + ")"
    }
    
    setProductPrice(newPrice) {
        this.price = newPrice;
    }
}

const sneakers = new Product(120, "ref1"); // instanciation step
console.log(sneakers.getProductInfos());
sneakers.setProductPrice(100);
console.log(sneakers.getProductInfos());


const guitar = new Product(300, "ref2");
// so each new Product is an instance of Product class
const shirt = new Product(44, "ref3");
console.log(typeof sneakers, guitar, shirt);