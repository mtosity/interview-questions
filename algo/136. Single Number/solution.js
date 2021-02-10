/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashset = {};
    
    for(let i=0;i<nums.length;i++){
        hashset[nums[i]] = hashset[nums[i]] ? false : true;
    }
    
    for(let key in hashset){
        if(hashset[key]){
            return key;
        }
    }
    
    return null;
};