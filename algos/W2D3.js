/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";         // ( () () )
const expected1 = true;

const str2 = "N(0(p)3";               // ( ( ) 
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";          // ( ) ) (
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.


/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.

 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
    let unmatchedOpens = 0;
    for (let char of str) {
        if (char === "(") unmatchedOpens++
        if (char === ")") unmatchedOpens--
        if (unmatchedOpens < 0) return false
    }
    return unmatchedOpens === 0;
}

console.log(parensValid(str1)) // expected: true
console.log(parensValid(str2)) // expected: false
console.log(parensValid(str3)) // expected: false


/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const strA = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";    // ( {} [ ({}) ] ) [{}]
const expectedA = true;

const strB = "D(i{a}l[ t]o)n{e";          // ({} []) {
const expectedB = false;

const strC = "A(1)s[O (n]0{t) 0}k";       // () [(] {) }
const expectedC = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.

 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    const stack = []; //used to keep track of our open braces
    const isOpen = { "(": true, "{": true, "[": true } //this object lets us quickly check whether a character is an opening bracket
    const closesToOpens = { // this object maps each closing bracket to its open
        ")": "(", 
        "}": "{", 
        "]": "["
     };

    for (let char of str) { //iterate through the string
        if (isOpen[char]) { //if the current character is one of our opens
            stack.push(char); //add it to our stack
        } else if (closesToOpens[char]) { //else, if it's one of our closes
            if (closesToOpens[char] === stack[stack.length - 1]) { //check if it's the correct close for our last open
                stack.pop(); //if it is, remove the open from the stack because it is matched
            } else {
                return false; //if it isn't, nesting is invalid, end function return false
            }
        }
    }
    return stack.length === 0; // if the stack is empty, all were matched and valid, else it is invalid
}
console.log(bracesValid(strA)) // expected: true
console.log(bracesValid(strB)) // expected: false
console.log(bracesValid(strC)) // expected: false












console.log(Math.floor(Math.random()*2)+1)