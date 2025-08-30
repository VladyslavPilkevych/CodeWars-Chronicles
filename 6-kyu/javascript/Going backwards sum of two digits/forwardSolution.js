function number(sums) {
  const result = [];
  let sumsArray;
  if( typeof sums === 'number') {
    sumsArray = sums.toString().split('');
  } else  {
    sumsArray = sums;
  }
  console.log(sumsArray)
  if ( sumsArray.length === 1) {
    return sumsArray;
  }
  for(let i = 0; i < sumsArray.length; i++){
    for(let j = i + 1; j < sumsArray.length; j++) {
      result.push(sumsArray[i] + sumsArray[j])
    }
  }
  return result;
}