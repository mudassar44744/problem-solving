/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let minIndex = 0;
    

    for(let i=1; i<prices.length; i++) {
        if(min > prices[i]) {
            min = prices[i];
            minIndex = i;
        }
    }
    if(minIndex + 1 === prices.length) return 0;
    let max = prices[minIndex];
    for(let j = minIndex; j < prices.length; j++) {
        if(max < prices[j]) {
            max = prices[j];
        }
    }

    let profit = max - min;
    return profit;


};

// console.log(maxProfit([1,2]))

console.log(maxProfit([2,4,1]))

// console.log(
// maxProfit([7,1,5,3,6,4])
// );



// var maxProfit = function(prices) {
//     let left = 0; // Buy
// let right = 1; // sell
// let max_profit = 0;
// while (right < prices.length) {
//   if (prices[left] < prices[right]) {
//     let profit = prices[right] - prices[left]; // our current profit

//     max_profit = Math.max(max_profit, profit);
//   } else {
//     left = right;
//   }
//   right++;
// }
// return max_profit;

// };


// let min = prices[0];
// let max = 0;
// for(let i of prices){
// if(min<i) max= Math.max(max,i-min);
// else min = i;
// }
// return max;