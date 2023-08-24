/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let jumpgage = 0, jumpPosition = 0;
    // 뛸 필요가 없는 경우
    if(nums.length == 1){ return true }
    else{
        for(i = 0; i < nums.length; i++){
            console.log("jumpgage : ", jumpgage);
            console.log("jumpPosition : ", i)
            console.log("i : ", jumpPosition);
            console.log("nums[i] : ", nums[i])
            if(jumpgage + jumpPosition < i) return false
            if(jumpgage + jumpPosition >= nums.length -1) return true
            if(i + nums[i] > jumpgage + jumpPosition){
                jumpPosition = i
                jumpgage = nums[i] 
            } 
        }
        return false
    }
};
