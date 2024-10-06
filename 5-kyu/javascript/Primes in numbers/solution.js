function primeFactors(n){
  let str = '';
  let counter = 2;
  let counterExponentiation = 0;
  let divider = n;
  while(divider !== 1) {
    while(divider % counter === 0) {
      divider /= counter; 
      counterExponentiation++;
    }
    if (counterExponentiation === 1) {
        str = str + '(' + counter + ')';
    } else if (counterExponentiation > 1) {
        str = str + '(' + counter + '**' + counterExponentiation + ')';
    }
    counterExponentiation = 0;
    counter++;
  }
  return str;
}
