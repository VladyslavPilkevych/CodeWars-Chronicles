function add(a, b) {
  if(a.length < 12 && b.length < 12) {
    return (Number(a) + Number(b)).toString();
  } else {
    const arrayA = a.length > b.length ? a.split("").reverse() : b.split("").reverse();
    const arrayB = a.length > b.length ? b.split("").reverse() : a.split("").reverse();
    const resultArray = [];
    let counter = 0;
    for (let i = 0; i < arrayA.length; i++) {
      const sum = (Number(arrayA[i]) + Number(arrayB[i] || 0) + counter).toString();
      counter = 0;
      if(sum.length === 1) resultArray[i] = sum;
      else {
        counter++;
        resultArray[i] = sum[1];
      } 
    }
    if (counter) resultArray.push("1");
    return resultArray.reverse().join("");
  }
}
