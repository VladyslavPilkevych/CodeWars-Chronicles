const binaryArrayToNumber = (arr) => {
  let n = 0;
  for(let i = 0; i < arr.length; i++) {
    n += arr[i] * Math.pow(2, arr.length - (i+1));
  }
  return n;
};
