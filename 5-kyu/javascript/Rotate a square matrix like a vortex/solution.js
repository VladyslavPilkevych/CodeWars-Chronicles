function rotateLikeAVortex(matrix) {
  const copyMatrixArray = [...matrix];
  const resultArray = [];
  for (let i = 0; i < copyMatrixArray.length; i++) {
    resultArray[i] = [];
  }
  let lastElement = copyMatrixArray.length-1;
  for (let n = 0; n < copyMatrixArray.length/2; n++) {
    for (let vortexLvlLoop = 0; vortexLvlLoop <= n; vortexLvlLoop++) {
      for (let j = n; j+n < copyMatrixArray.length; j++) {
        resultArray[n][j] = copyMatrixArray[j][lastElement];
        resultArray[lastElement][j] = copyMatrixArray[j][n];
        resultArray[j][n] = copyMatrixArray[n][(lastElement+n)-j];
        resultArray[j][lastElement] = copyMatrixArray[lastElement][(lastElement+n)-j];
      }
      for (let i = 0; i < copyMatrixArray.length; i++) {
        for (let j = 0; j < copyMatrixArray.length; j++) {
          if (typeof resultArray[i][j] === "number") copyMatrixArray[i][j] = resultArray[i][j];
        }
      }
    }
    lastElement--;
  }
  
  return resultArray;
}
