/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [7, 7, 28, 28, 56, 56];
const expected3 = [7, 28, 56];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(sortedNums) {
  if (sortedNums.length <= 1) {
      return sortedNums;
  }
  const dedupedArr = [];

  for (let i = 0; i < sortedNums.length; i++) {
      // This only works because it's sorted.
      if (sortedNums[i] !== dedupedArr[dedupedArr.length - 1]) {
          dedupedArr.push(sortedNums[i]);
      }
  }
  return dedupedArr;
}

console.log(dedupeSorted(nums1)); // [1]
console.log(dedupeSorted(nums2)); // [1, 2, 3]
console.log(dedupeSorted(nums3)); // [7, 28, 56]
console.log(dedupeSorted(nums4)); // [1]

/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1B = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2B = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3B = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4B = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
  let length = arr1.length > arr2.length ? arr1.length : arr2.length
  //                expression           ?  if true    : if false

  let combined = []

  for (let i = 0; i < length; i++){
      if (i < arr1.length) combined.push(arr1[i])
      if (i < arr2.length) combined.push(arr2[i])
  }
  return combined
}
console.log(interleaveArrays(arrA1, arrB1)); //  [1, "a", 2, "b", 3, "c"];
console.log(interleaveArrays(arrA2, arrB2)); // [1, 2, 3, 4, 6, 8];
console.log(interleaveArrays(arrA3, arrB3)); // [1, 2, 3, 4, 5, 7];
console.log(interleaveArrays(arrA4, arrB4)); // [42, 0, 6];

function dedupeSorted(sortedNums) {
  if (sortedNums.length === 0) {
      return [];
  }
  let numbers = [sortedNums[0]];
  for (let i = 1; i < sortedNums.length; i++) {
      if (sortedNums[i] !== sortedNums[i - 1])
          numbers.push(sortedNums[i]);
  }
  return numbers
}

function interleaveArrays(arr1, arr2) {
  let point1 = 0;
  let point2 = 0;
  let empty = [];
  while (point1 < arr1.length || point2 < arr2.length) {

      if (point1 < arr1.length) {
          empty.push(arr1[point1])
          point1++;
      }

      if (point2 < arr2.length) {
          empty.push(arr2[point2])
          point2++;
      }
  }
  return empty
}