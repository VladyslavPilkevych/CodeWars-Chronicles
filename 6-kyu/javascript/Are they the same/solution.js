const comp = (array1, array2) => array1 && array2 && JSON.stringify(array1.map(i => i *= i).sort()) === JSON.stringify(array2.sort()) ? true : false;
