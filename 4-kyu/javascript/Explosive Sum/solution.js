function sum(num) {
  let p = [];
  p[0] = 1;
  for (let i = 1; i <= num; i++) {
    let j = 1, k = 1, s = 0;
    while (j > 0) {
      j = i-(3*k*k+k)/2;
      if (j >= 0) {
        s -= ((-1) ** k) * p[j];
      }
      j = i-(3*k*k-k)/2;
      if (j >= 0) {
        s -= ((-1) ** k) * p[j];
      }
      k++;
    }
    p[i] = s;
  }
  return p[p.length - 1];
}
