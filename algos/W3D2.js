/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true; //1 for bonus

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true; //1 for bonus

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
    //declare left and right at beginning and end of array
    let left = 0; 
    let right = sortedNums.length - 1;

    while (left <= right) {
        //calculate midpoint
        let mid = Math.floor((left + right) / 2);
        //check for match
        if (sortedNums[mid] === searchNum) {
            return countAdjacentDupes(sortedNums, mid); //bonus
            // return true; //base functionality
        } else if (sortedNums[mid] < searchNum) { //if found value smaller than search
            left = mid + 1; //move left point up to only search above mid point
        } else { //otherwise, found value is larger than search value
            right = mid - 1; //move right pointer down to only search below midpoint
        }
    }
    return false;
}

function countAdjacentDupes(arr, idx) {
    let count = 1; // we know we found one, at idx
    let elem = arr[idx]; //this is what we're going to match
    let right = idx + 1; //we'll look up
    let left = idx - 1; //and down
    while (arr[right] === elem) { //looking up -- finds matches to the right
        count++;
        right++;
    }
    while (arr[left] === elem) { //looking down -- finds matches to the left
        count++;
        left--;
    }
    return count;

}


console.log(binarySearch(nums1, searchNum1)); // false
console.log(binarySearch(nums2, searchNum2)); // true (1 for bonus)
console.log(binarySearch(nums3, searchNum3)); // true (1 for bonus)

// bonus, how many times does the search num appear?
console.log(binarySearch(nums4, searchNum4)); // 4