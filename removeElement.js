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