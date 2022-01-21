let price = [100, 180, 260, 310, 40, 535, 695];

function maxProfit(prices, size) {
  // maxProfit adds up the difference between
  // adjacent elements if they are in increasing order
  var maxProfit = 0;

  // The loop starts from 1
  // as its comparing with the previous
  for (i = 1; i < size; i++) {
    if (prices[i] > prices[i - 1]) {
      console.log(`Buy: ${price[i - 1]}, Sell: ${price[i]} `);

      maxProfit = maxProfit + prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
}
console.log(maxProfit(price, 7));
