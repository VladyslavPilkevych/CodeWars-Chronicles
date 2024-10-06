function generateDiagonal(n, l) {
  if (l === 0) return [];
  const result = [];
  let arr1 = [],
    arr2 = [];
  for (let k = 0; k < n + l; k++) {
    arr2 = [];
    for (let i = 0; i <= arr1.length; i++) {
      !i || i === arr1.length ? arr2.push(1) : arr2.push(arr1[i - 1] + arr1[i]);
    }
    if (k >= n) {
      result.push(arr2[arr2.length - (n + 1)]);
    }
    arr1 = [...arr2];
  }
  return result;
}
