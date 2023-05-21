// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 //Problem Link : https://leetcode.com/problems/single-number/

// Example 1:

// Input: nums = [2,2,1]
// Output: 1


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let arr = nums.sort((a, b) => a - b); // Create a copy of the array and sort it
  
    for (let i = 0; i <= nums.length - 1; i += 2) { // Iterate by 2
      if (arr[i] !== arr[i + 1]) {
        return arr[i];
      }
    }
  
    return arr[arr.length - 1];  // Return the first non-matching pair
  };


// const singleNumber = nums => nums.reduce((prev, curr) => prev^curr)