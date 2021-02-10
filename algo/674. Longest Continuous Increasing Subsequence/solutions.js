/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let re = 0, anchor=0;
    
    for(let i=0;i<nums.length;i++){
         if(i>0 && nums[i - 1] >= nums[i]){
             anchor = i;
         }
        re = Math.max(re, i - anchor + 1);
    }
    return re;
};