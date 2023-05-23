// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// var searchRange = function (nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     let output = [-1, -1];

//     // Binary search for the target (left-biased)
//     while (left < right) {
//         let middle = Math.floor((left + right) / 2);

//         if (nums[middle] < target) {
//             left = middle + 1;
//         } else {
//             right = middle;
//         }
//     }

//     // If the target was not found on the first pass
//     if (nums[left] != target) {
//         return output;
//     }

//     // Store the left-hand side
//     output[0] = left;

//     // Reset the right-hand side of the binary search (left-hand side remains as is)
//     right = nums.length - 1;

//     // Binary search for the target (right-biased)
//     while (left < right) {
//         let middle = Math.floor((left + right) / 2) + 1;
//         if (nums[middle] <= target) {
//             left = middle;
//         } else {
//             right = middle - 1;
//         }
//     }

//     // Store the right-hand side
//     output[1] = right;

//     return output;
// };


    searchRange([5,7,7,8,8,10],8);
//https://www.youtube.com/watch?v=4sQL7R5ySUU&ab_channel=NeetCode



var searchRange = function (nums, tar) {
    let l = 0,
      r = nums.length - 1,
      lIdx = -1,
      rIdx = -1;
    while (l <= r) {
      const mid = Math.floor(l / 2 + r / 2);
      if (nums[mid] < tar) {
        l = mid + 1;
      } else if (nums[mid] >= tar) {
        r = mid - 1;
      }
    }
    if (nums[l] === tar) lIdx = l;
    (l = 0), (r = nums.length - 1);
    while (l <= r) {
      const mid = Math.floor(l / 2 + r / 2);
      if (nums[mid] <= tar) {
        l = mid + 1;
      } else if (nums[mid] > tar) {
        r = mid - 1;
      }
    }
    if (nums[r] === tar) rIdx = r;
    return [lIdx, rIdx];
  };