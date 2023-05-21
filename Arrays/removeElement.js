/**
 Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
 */



/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */



 var removeElement = function(nums,val) {

    if(nums.length === 0) return 0;
    
    let index = 0;
    for(var i in nums){
    if(nums[i] != val){
        nums[index] = nums[i];
        index++;
    }
}
    return index;    
}
 console.log(removeElement([3,2,2,3],3));
 console.log(removeElement([0,1,2,2,3,0,4,2],2));

 