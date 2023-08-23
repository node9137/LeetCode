/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length == 1) return nums[0]
    nums.sort(function (a, b) { return a - b });
    let before, max, maxCount = 0, count = 0;
    for(i=0; i < nums.length; i ++){
            if(before == nums[i]){
                count++
                if (count > maxCount) {
                    max = nums[i]                
                    maxCount = count    
                }
            }
            else count = 0;
            before = nums[i]
    }
    return max
};