/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    nums.sort(function (a, b) { return a - b });
    let before, flag = 0;
    for(i=0; i < nums.length; i ++){
        if(i == 0) before = nums[i]
        else{            
            if(before == nums[i]){
                flag++;                
                if(flag > 1) { 
                    nums.splice(i, 1) 
                    i--;
                } 
            }else flag = 0;
            before = nums[i]            
        }
    }
    return nums.length  
};