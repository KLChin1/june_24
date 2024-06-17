/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    let distance = 0; // keep track of distance since last person
    let firstPersonSeen = false; //keep track of if we've seen a person
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] === 0) { //if an empty space, add to empty space distance
            distance += 1;
        } else { // if a person is seen
            if (firstPersonSeen && distance < 6) { //if we've already seen someone, and they're closer than 6
                return false; // social distance is not being enforced
            }
            firstPersonSeen = true; // otherwise, set seen to true
            distance = 0; // and reset distance
        }
    }
    return true;
}

console.log(socialDistancingEnforcer(queue1)); // false
console.log(socialDistancingEnforcer(queue2)); // true
console.log(socialDistancingEnforcer(queue3)); // true
console.log(socialDistancingEnforcer(queue4)); // true

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/ //[4,1,0,5]
              // 0   1  2  3 
const numsA = [4,   1,  0,  5];
const expectedA = 2;

const numsB = [9, 9];
const expectedB = -1;
//             0  1  2  3  4  5  6  7  8  9  10
const numsC = [1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1];
const expectedC = 5;



/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    if (nums.length < 3) { //need at least 3 indices to balance
        return -1;
    }

    let left = nums[0]; //start the left as the first value

    let right = 0; //start the right at 0
    for (let i = 2; i < nums.length; i++) {
        right += nums[i]; // and add all values beyond our first pivot point (index 1)
    }

    for (let i = 1; i < nums.length - 1; i++) { //starting on our first pivot point, going to the one before the end
        if (left === right) { // if left and right are equal, we found a balance point
            return i;
        } //otherwise, shift next pivot point out of the right
        right -= nums[i + 1];
        // and the last pivot point into our left
        left += nums[i];
    }
    return -1; // not found
}

console.log(balanceIndex(numsA)); // 2
console.log(balanceIndex(numsB)); // -1
console.log(balanceIndex(numsC)); // 5
