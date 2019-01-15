function getMaxProfit(stockPrices) {
  if(stockPrices.length < 2){
    throw 'not enough sales';
  }

  // Calculate the max profit
  let min = stockPrices[0]; //first two things in array
  let profit = stockPrices[1] - min; //first possible profit
  
  for(let i = 1; i < stockPrices.length; i++){
    if(stockPrices[i] - min > profit) //when profit is greater
      profit = stockPrices[i] - min;

    if(stockPrices[i] < min) //new min
      min = stockPrices[i];
  }
  return profit;
}
