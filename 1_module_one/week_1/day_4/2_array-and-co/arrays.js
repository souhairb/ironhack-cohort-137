console.log("ready to rock");


function a() {

}

const b = function () {

};

const fatArrowed = () => {
    // this binding is different for fat arrow functions
    // and the return value can be handle in a short syntax way
    return "hey ! i'm a new scholl function expression : )";
};


const msg = fatArrowed();
// you call the fat arrow functions exactly the same way as regurlar functions ....


const add = (a, b) => {
    return Number(a) + Number(b);
};

console.log(add("10", 20)); // prints 30

function sub(a, b) {
    return Number(a) - Number(b)
}

// const sub = (a, b) => a - b;

// if there's only one expression to return you may omit the {} and return keyword

console.log(sub(1, 1)); // prints 0


// THIS (aka window ( aka for the moment... ))
// this value can change ... so beware : don't guess, check

// ARRAY PROTOTYPE
// Array.prototype is the schema defining all the rule that apply to the array "type" (array are object, don't forget)


const instruments = [
    { type: "piano", price: 4000 },
    { type: "drum machine", price: 1000 },
    { type: "sampler", price: 665 },
    { type: "guitar", price: 230 },
    { type: "trumpet", price: 1800 },
];

//ARRAY.FOREACH ... loop through an array, the functional way !

instruments.forEach((instrument, index, fullArray) => {
    console.log(instrument, instrument.type, instrument.price);
    console.log(index);
    console.log(fullArray);
});

for (let i = 0; i < instruments.length; i += 1) {
    console.log(instruments[i]);
}

instruments.forEach((instrument) => console.log(instrument));


// ARRAY FILTER ....

// const filteredList = instruments.filter((instr) => {
//     console(typeof thing);
//     return instr.price > 1000;
// });

const filtered = instruments.filter((x) => x.price > 1000);

console.log(filtered);

// ARRAY.map

const tvs = [
    { type: "lcd", price: 600 },
    { type: "plasma", price: 555 },
    { type: "lcd", price: 1000 },
    { type: "4k", price: 4000 },
    { type: "old one", price: 1 },
];

const sales = (o) => {
    const newO = Object.assign({}, o); // creating a copy of the current obj
    newO.price = o.price * 0.9; // change the price of the copy
    return newO; // return the copy (it is pushed insided the target array)
}

const discountInstruments = instruments.map(sales);
// discountInstruments is the target array of the previous map action
const discountTvs = tvs.map(sales);
// discountTvs is the target array of the previous map action

// REDUCE ... swiss army knife for arrays...

const totalTvsPrice = tvs.reduce((acc, currTV, i) => { // the callback is the reducer
    acc += currTV.price;
    return acc;
}, 0); // zero here is the accumulator for the reducer


const expensiveTVS = tvs.reduce((acc, currTV) => {
    if (currTV.price >= 1000) acc.push(currTV)
    return acc;
}, []); // empty array here is the accumulator for the reducer

console.log(`expensive tvs list:  `, expensiveTVS);


// ARRAY.sort reorder
const numbers = [1000, 0.5, 5000, 18, 500, 100, 1];
const words = ["a", "baz", "A", "cat", "bar", "xyz", "Dog", "Dude", "foo"];

numbers.sort((a, b) => {
    return a - b;
});
console.log("sorted numbers ? => ");
console.log(numbers);