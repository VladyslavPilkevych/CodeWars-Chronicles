const createArrayOfTiers = (num) => num.toString().split('').reduce((acc, item, index) => {
    acc[index-1] ? acc.push(acc[index-1] + item) : acc.push(item);
    return acc;
  }, []);
  