function calculate(recsInput){
  if (!recsInput.length) return 0;

  const dict = {};
  let result = 0;
  
  const arrayX = [];
  const arrayY = [];
  
  const noDuplicates = [];
  const uniqueRectangles = new Set(recsInput.map(JSON.stringify));
  uniqueRectangles.forEach(rectangle => {
    noDuplicates.push(JSON.parse(rectangle));
  });
  
  const recs = [];
  for (let i = 0; i < noDuplicates.length; i++) {
    let isNested = false;
    for (let j = 0; j < noDuplicates.length; j++) {
      if (i !== j && isRectInside(noDuplicates[i], noDuplicates[j])) {
        isNested = true;
        break;
      }
    }
    if (!isNested) {
      recs.push(noDuplicates[i]);
    }
  }

  for (let i = 0; i < recs.length; i++) {
    if (!arrayX.includes(recs[i][0])) arrayX.push(recs[i][0]);
    if (!arrayY.includes(recs[i][1])) arrayY.push(recs[i][1]);
    if (!arrayX.includes(recs[i][2])) arrayX.push(recs[i][2]);
    if (!arrayY.includes(recs[i][3])) arrayY.push(recs[i][3]);
  }
  arrayX.sort((prev, next) => prev - next);
  arrayY.sort((prev, next) => prev - next);

  recs.forEach((rec) => {
    const buffer = [];
    const startX = arrayX.indexOf(rec[0]);
    const startY = arrayY.indexOf(rec[1]);

    for(let i = startX; rec[2] > arrayX[i]; i++) {
      if(arrayX[i+1]) {
        buffer.push([arrayX[i], arrayX[i+1]]);
      }
    }
    for(let i = startY; rec[3] > arrayY[i]; i++) {
      if(arrayY[i+1]) {
        for (const [bx1, bx2] of buffer) {
          const key = `${bx1},${arrayY[i]},${bx2},${arrayY[i + 1]}`;
          if (dict[key] === undefined) {
            result += Math.abs(bx1 - bx2) * Math.abs(arrayY[i] - arrayY[i + 1]);
            dict[key] = 1;
          }
        }
      }
    }
  });

  return result;
}

function isRectInside(rect1, rect2) {
  return rect1[0] >= rect2[0] && rect1[1] >= rect2[1] && rect1[2] <= rect2[2] && rect1[3] <= rect2[3];
}