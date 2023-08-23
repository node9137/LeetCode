/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const conquerCombine = function(l,r){
    let result = new Array;
    while (l.length != 0 && r.length != 0) {  l[0] <= r[0] ? result.push(l.shift()) : result.push(r.shift()); }
    return [...result,...l, ...r]
}

const divide = function(arr) {
    if(arr.length == 1) {
        return arr;
    } else{
        let middle = Math.floor(arr.length / 2);
        let leftArr = arr.slice(0, middle);
        let rightArr = arr.slice(middle);
        return conquerCombine(divide(leftArr), divide(rightArr)) 
    }
};
    
const merge =  function(nums1, m, nums2, n) {
    let count = 0
    for(let i = m; i < m+n; i++){
        if(nums1[i] == 0) nums1[i] = nums2[count++]
    }
    let arr = divide(nums1);
    for(let i = 0; i < m+n; i++){ nums1[i] = arr[i] }
}