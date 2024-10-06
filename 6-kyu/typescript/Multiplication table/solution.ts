export function multiplicationTable (size: number): number[][] {
  const resultArr: number[][] = [];
  for(let i = 1; i <= size; i++) {
    const lineArr: number[] = [];
    for(let j = 1; j <= size; j++) {
      if (i === 1 && j !== 1) {
        lineArr.push(j);
      } else {
        lineArr.push(i*j);
      }
    }
    resultArr.push(lineArr);
  }
  return resultArr;
}
