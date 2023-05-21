/**
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
 */


/**
 * You have a time travel machine that can only go back 1 day.
 * You will use it to exploit the stock market.
 * But somehow had infinite money to start with. (Whatever.)
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    // Start with nothing and take every profitable opportunity from time travel
    let profit = 0;
    // Start from the second day (because that is the first day you could sell)
    for (let i = 1; i < prices.length; i++) {
      // Our Delorean only goes back 1 day, but that is all we need
      const [priceYesterday, priceToday] = [prices[i - 1], prices[i]];
      // Whenever there is profit, engage that Flux Capacitor!
      if (priceYesterday < priceToday)  {
       console.log("price yesterday",priceYesterday);
       console.log("price today",priceToday);
        profit += priceToday - priceYesterday;
    }
      // Buy yesterday; sell today
    }
    // Take every Monday off!
    return profit;
    // Time travel trading makes every weekend is a three-day weekend!
  };


  console.log(
    maxProfit([7,1,5,3,6,4])
  )



//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/582462/122-javascript-solution-explained-with-time-travel/?languageTags=javascript