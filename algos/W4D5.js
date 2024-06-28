/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */


// You will need more parameters!
// .slice may prove useful to you
function generateAnagrams(str, anagrams = [], partial = "") {

    // anagrams -- the array of already generated anagrams. Since arrays are passed by reference, each branch of our
    // recursive calls will add anagrams to the same array

    // partial -- a working string. we move one character to it at a time until the starting string is empty.

    if (str.length === 0) anagrams.push(partial);
    // if the string length is 0, that means all characters have been moved over, and we have an anagram to add to our array

    for (let i = 0; i < str.length; i++) {
        // looping over the remaining letters in the string, we will initate recursive calls for each of them so that we create every
        // possible anagram.

        // these 5 lines generate a new remaining string and partial string by removing the current letter from the remaining string
        // and moving it to the partial string
        const currentLetter = str[i];
        const beforeLetter = str.slice(0, i);
        const afterLetter = str.slice(i + 1);
        const remainingStr = beforeLetter + afterLetter;
        const newPartial = partial + currentLetter;

        //we then use the new remaining string and new partial string to recursively call this function
        generateAnagrams(remainingStr, anagrams, newPartial);
    }
    return anagrams;
}

console.log(generateAnagrams(str1)); //["ilm", "iml", "lim", "lmi", "mil", "mli"] (order may vary, that's okay)