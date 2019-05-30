console.log("ready to rock !!!");

// 1 - Names and Input

var hacker1 = "foo";
var hacker2 = "bar";

console.log("The driver's name is " + hacker1);

// do {
//     hacker2 = window.prompt("input for the navigator's name !");
// } while (!hacker2);

console.log("The navigator's name is " + hacker2);

var len1 = hacker1.length;
var len2 = hacker2.length;
// var 
// 2 - Conditionals

if (len1 > len2) {
    console.log("The Driver has the longest name, it has " + XX + " characters");
} else if (len1 < len2) {
    console.log("Yo, navigator got the longest name, it has " + len2 + " characters");
} else {
    console.log("Wow, you both got equally long names, " + len1 + " characters!!!");
}

// 3 - Loops

var upperHacker1 = "";
var reversedHacker1 = "";

// A - UPPERCASE
for (let i = 0; i < hacker1.length; i++) {
    upperHacker1 += hacker1[i].toUpperCase() + " ";
}

console.log(upperHacker1);

// B - REVERSE
for (let i = hacker2.length -  1; i >= 0; i--) {
    reversedHacker1 += hacker2[i].toUpperCase() + " ";
}

console.log(reversedHacker1);

console.log("---------------");

// C - ALPHABETICAL ORDER

for (let i = 0; i< hacker1.length; i++) {
    console.log(hacker1.charAt(i));
    console.log(hacker2.charAt(i));
    console.log(hacker1.charAt(i) < hacker2.charAt(i));
    console.log("---------------");
}



// BONUS TIME !!!

const sentences = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon"
];

function isPalindrome(sentence) {
    const cleanedUp = sentence.replace(/\W|\s/g, ''); // remove any non-letter char or space ; )
    const reversed = cleanedUp.split('').reverse().join("");
    return reversed === cleanedUp;
}

for (let i = 0; i < sentences.length; i++) {
    let result = isPalindrome(sentences[i]) ? "is palindrome" : "is not palindrome"
    console.log("sentence " + (i + 1) + " " + result + "\n---------");
}