function determinant(m) {
  if (m.length === 1) {
    return m[0][0];
  }
  return openMatrix(m);
}
function openMatrix(m, n = 1) {
  if (m.length == 2) {
    return n*(m[0][0]*m[1][1] - m[0][1]*m[1][0]);
  } else {
    let resultSum = 0;
    for (let i = 0; i < m.length; i++) {
      const arrayToOpen = [];
      for (let row = 1; row < m.length; row++) {
        arrayToOpen[row-1] = [];
        for (let col = 0; col < m.length; col++) {
          if (col !== i && typeof m[row][col] === 'number') {
            arrayToOpen[row-1].push(m[row][col]);
          }
        }
      }
      resultSum += openMatrix(arrayToOpen, i % 2 === 0 ? m[0][i]*n : (-1)*m[0][i]*n);
    }
    return resultSum;
  }
}
