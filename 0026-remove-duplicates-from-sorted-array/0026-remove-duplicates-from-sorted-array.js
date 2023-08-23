/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let arrToSet = [...new Set(nums)]
    nums.splice(arrToSet.length);    
    for(let i=0; i<arrToSet.length; i++) { 
        if(i == 0) nums.slice(0, arrToSet.length);
        nums[i] = arrToSet[i];
    }
    return nums.length;
};
