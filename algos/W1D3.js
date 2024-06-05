
/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const str1 = "object oriented programming";
const expectedA = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expectedB = "APIE";

const str3 = "software development life cycle";
const expectedC = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expectedD = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
    let acronym = "";
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            acronym += words[i][0];
        }
    }
    return acronym.toUpperCase();
}

function acronymize2(str) {
    let acronym = "";
    let currentWord = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            currentWord += str[i];
        } else if (currentWord.length > 0) {
            acronym += currentWord[0];
            currentWord = "";
        }
    }
    if (currentWord.length > 0) {
        acronym += currentWord[0];
    }
    return acronym.toUpperCase();
}

function acronymize3(str) {
    // str = str.trim()
    const words = str.split(' ');


    for (var i=0; i<words.length; i++) {
        if (words[i] === " ") {
            words[i]=""
        }
        else {
            words[i] = words[i][0];
            // words[i] = words[i].toUpperCase();
        } 
    }
    
    str = words.join("");
    // str.toUpperCase();
    return str.toUpperCase()
}

console.log(acronymize(str1)); // Expected: "OOP"
console.log(acronymize(str2)); // Expected: "APIE"
console.log(acronymize(str3)); // Expected: "SDLC"
console.log(acronymize(str4)); // Expected: "GIT"




// function acronymize(str) {
//     let acronym = "";
//     let words = str.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] !== "") {
//             acronym += words[i][0];
//         }
//     }
//     return acronym.toUpperCase();
// }

