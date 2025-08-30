function number(sums) {
  const n = (1 + Math.sqrt(1 + 8 * sums.length)) / 2;
  if (n === 1) return 0;
  if (n === 2) return Number(`${Math.max(1, sums[0]-9)}${sums[0]-Math.max(1, sums[0]-9)}`);

  const d0 = (sums[0] + sums[1] - sums[n-1]) / 2;
  const digits = [d0, sums[0]-d0, sums[1]-d0];

  for (let k=3; k<n; k++) digits.push(sums[k-1]-d0);

  return Number(digits.join``);
}
