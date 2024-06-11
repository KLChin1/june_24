/* 
  Given a string,
  return a new string with the duplicate characters excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABCabcABCabcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

//bonus
const str5 = "aba"
const expected5 = "ba" // possibly ab without bonus

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
// O(n)
function stringDedupe2(str) {
    const seen = {}
    let deduped = ""
    for (let i = str.length-1; i >= 0; i--){
        if (!seen.hasOwnProperty(str[i])){
            seen[str[i]] = true
            deduped = str[i] + deduped
        }
    }
    return deduped
}
//roughly O(n*m) where n is all chars and m is unique chars
function stringDedupe(str) {
    let deduped = ""
    for (let i = str.length-1; i >= 0; i--){
        if (!deduped.includes(str[i])){
            deduped = str[i] + deduped
        }
    }
    return deduped
}

console.log(stringDedupe(str1));
console.log(stringDedupe(str2));
console.log(stringDedupe(str3));
console.log(stringDedupe(str4));
console.log(stringDedupe(str5));

