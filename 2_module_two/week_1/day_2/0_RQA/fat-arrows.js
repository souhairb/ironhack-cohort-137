// FAT ARROW FUNCTIONS HAVE a short syntax form

const x = (v) => {
    return typeof v;
};

// if you only one instruction to return, skip curly brackets and return statement
const y = (v) => typeof v;

console.log(x("foo") === y("bar")); // yep, it's true :)

// -----------------------------------------------------------
// fat arrows functions behave differently with "this" keyword
// -----------------------------------------------------------

class Sneaker {
    constructor(b, n, p, s) {
        this.brand = b;
        this.name = n;
        this.isDiscount = false;
        this.price = p;
        this.availableSize = s;
        this.isDiscounted();
    }

    isDiscounted() {
        const timing = 5000;

        setInterval(function() { // function keyword func redefine their own this
            // console.log("x", this.isDiscount); // undefined
        }, timing);

        setInterval(() => { // you can use ()=> to keep "this" tied to the class
            console.log(`${this.name} is ${this.isDiscount ? "discounted" : "not discounted"} \n ----`); // false
        }, timing);
    }

    sendDiscountMail() {
        console.log(`hey user, there is a discount on ${this.name}`);
    }
}

const sneaker1 = new Sneaker("Adidas", "Superstar", 55, [40, 41, 43, 45]);
const sneaker2 = new Sneaker("Nike", "Jordan V", 250, [44, 46]);

console.log("------SNEAKERS-------");
console.log(sneaker1);
console.log("-------------");
console.log(sneaker2);
console.log("-------------");

