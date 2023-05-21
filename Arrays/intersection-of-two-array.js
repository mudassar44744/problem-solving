/**
 Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect1 = function(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
      if(nums2.includes(nums1[i])){
          result.push(nums1[i])
          nums2.splice(nums2.indexOf(nums1[i]), 1)
      }
    }
    return result;
  
  };

//   console.log(intersect1([1,1,2,2],[1,3,2]));


  //intersection of multiple arrays

  const intersect = (a1, a2, ...rest) => {
    const a12 = a1.filter(value => a2.includes(value))
    if (rest.length === 0) { return a12; }
    return intersect(a12, ...rest);
  };
  
  console.log(intersect([1,2,3,4,5], [1,2], [1, 2, 3,4,5], [2, 10, 1]))



  function intersection (a, b) {
    const setA = new Set(a);
    return b.filter(value => setA.has(value));
}

// console.log(intersection([1,2,3], [2,3,4,5]))