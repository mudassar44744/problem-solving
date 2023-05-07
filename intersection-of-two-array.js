// let minLengthArr = nums1.length < nums2.length ? nums1 : nums2,
// maxLengthArr = nums1.length >= nums2.length ? nums1 : nums2,
// result = [];
// minLengthArr.map((item, i) => {
// let idx = maxLengthArr.indexOf(item);
// if(idx !== -1) {
//     maxLengthArr.splice(idx, 1);
//     result.push(item)
// }
// })
// return result;
// }



// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var intersect = function(nums1, nums2) {
//     let result = [];
//     for (let i = 0; i < nums1.length; i++) {
//       if(nums2.includes(nums1[i])){
//           result.push(nums1[i])
//           nums2.splice(nums2.indexOf(nums1[i]), 1)
//       }
//     }
//     return result;
  
//   };