/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. If the character only appears once, do not include a '1'
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

const str1 = "aaaabbcdddaaa";
const expected1 = "a4b2cd3a3"; //either of these are acceptable based on the parameters of the algo
const expected1b = "a4bbcd3a3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "ccbb";
const expected4 = "ccbb";

const str5 = "abbbbbbbbbbbbbbbbb";
const expected5 = "ab17";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
// RIOT  Read Input Output Talk
// Pseudocode:
//   Create new string to return
//   Iterate through the original string
//   -- consider current character, look ahead to see how many duplicates exist
//   -- if more than one, add character and duplicate count to new string
//      -- else just add character
//   -- continue iterating from last instance of the character we're considering
//   Compare encoded string to new string, return encoded string only if it is shorter, otherwise return 


function encodeStr(str) {
    let encoded = ""; //string to be returned

    // ? Process the original string
    for (let i = 0; i < str.length; i++) { //iterate through original string
        let currChar = str[i]; //consider the current character
        let dupeCount = 1; // we have seen it once so far

        // ? This loop moves i forward and counts duplicates for the current char
        while (str[i + 1] === currChar) { //while the next character is equal to the current char
            dupeCount++; //increase amount of dupes,
            i++; //increment i to check next character
        }

        // ? Adding encoded information to the string
        if (dupeCount === 1) { //if we only found one character
            encoded += currChar //just add that character in
        }
        // else if (dupeCount === 2){ // ! we could add an additional check for a count of two
        //     encoded += currChar + currChar
        // }
        else {
            encoded += currChar + dupeCount; //otherwise add the character and the count
        }
    }

    //? Return the encoded string only if it is shorter, otherwise return original string
    return encoded.length < str.length ? encoded : str;
    //ternary: expression ? value if true : value if false
}


console.log(encodeStr(str1)); // Expected: "a4b2cd3a3" or "a4bbcd3a3";
console.log(encodeStr(str2)); // Expected: ""
console.log(encodeStr(str3)); // Expected: a
console.log(encodeStr(str4)); // Expected: ccbb
console.log(encodeStr(str5)); // Expected: ab17
