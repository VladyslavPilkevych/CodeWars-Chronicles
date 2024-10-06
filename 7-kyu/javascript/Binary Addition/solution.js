function addBinary(a, b) {
  let dd = a + b; //division difference
  let binaryRev = '';
  while (dd !== 0) {
      binaryRev += dd % 2;
      dd = (dd - (dd % 2)) / 2;
  }
  return binaryRev.split('').reverse().join('');
}
  