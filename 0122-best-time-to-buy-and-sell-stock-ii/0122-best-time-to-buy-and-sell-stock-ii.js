/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0], profit = 0;
    for(i = 1; i < prices.length; i ++){
        if( buy > prices[i]) { buy = prices[i]}
        if(buy < prices[i]) { 
            profit += prices[i] - buy 
            buy = prices[i] 
        }
    }
    return profit
}    