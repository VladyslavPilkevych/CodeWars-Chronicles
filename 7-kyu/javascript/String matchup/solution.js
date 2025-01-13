function solve(a,b){
  const countMap = {};
  for (let str of a) {
      countMap[str] = (countMap[str] || 0) + 1;
  }
  return b.map(str => countMap[str] || 0);
}
