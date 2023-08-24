/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let now = 0, min = prices[0], max = 0
    while(now < prices.length){
        if(prices[now] < min) min = prices[now]
        if(prices[now] - min > max) max = prices[now] - min
        now++
    }
    return max
};
