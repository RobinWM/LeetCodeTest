// 1.暴力解决:遍及
var maxProfit = function (prices) {
    let l = prices.length;
    if (l < 2) {
        return 0;
    }

    let maxPro = 0; //记录最大利润
    let min = prices[0]; //记录数组中访问过的最小值
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        maxPro = Math.max(prices[i] - min, maxPro);
    }
    return maxPro
};

console.log(maxProfit([1, 2]))


// 2.动态规划