/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation or capitalization
*/
// RIOT Read Input Output Talk
const str1 = "tacocat";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

const str5 = "abba";
const expected5 = true;


function isPalindrome(str) {
    for (let i = 0; i < str.length/2; i++){
        let j = str.length - 1 - i;
        if (str[i] != str[j]){
            return false
        }
    }
    return true
}

function isPalindrome(str) {
    let i = 0;
    let j = str.length-1
    while(i < j){
        if (str[i] != str[j]){
            return false;
        }
        i++
        j--
    }
    return true
}

function isPalindrome(str){
    return str === str.split("").reverse().join("")
}



console.log(isPalindrome(str1)); //expected: true
console.log(isPalindrome(str2)); //expected: true
console.log(isPalindrome(str3)); //expected: false
console.log(isPalindrome(str4)); //expected: false
console.log(isPalindrome(str5)); //expected: true