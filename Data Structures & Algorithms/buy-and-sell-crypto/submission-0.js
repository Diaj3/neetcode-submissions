class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;
        for (let i=1; i<prices.length;i++) {
            minPrice = Math.min(minPrice, prices[i]);
            let p = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, p);
        }
        return maxProfit;
    }
}
