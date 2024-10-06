function countChange(money, coins) {
  if(money === 0) return 1;
  let results = { count: 0 };
  coins.sort((a, b) => a - b);
  recurtion(money, coins, results);
  console.log(results)
  return results.count;
}

function recurtion(money, coins, results, sum = 0, index = 0) {
  for(let i = index; i < coins.length; i++) {
    sum += coins[i];
    if(sum > money) {
      return;
    } else if(sum === money) {
      results.count++;
      return;
    }
    recurtion(money, coins, results, sum, i);
    sum -= coins[i];
  }
}
