function sumIntervals(intervals) {
    const resultArray = manageIntervals(intervals);
    return resultArray.reduce((acc, item) => !!item ? acc += item[1] - item[0] : acc, 0);
}
function manageIntervals(intervals) {
  const arrayToManage = [...intervals.filter(e => e)];
    arrayToManage.sort((a, b) => a[0] - b[0]);
    let counter = 0;
    for (let i = arrayToManage.length; i >= 0; i--) {
        if (arrayToManage[i + 1] && arrayToManage[i]) {
            if (arrayToManage[i][1] >= arrayToManage[i + 1][1]) {
                arrayToManage[i + 1] = null;
                counter++;
            } else if (arrayToManage[i][1] >= arrayToManage[i + 1][0]) {
                arrayToManage[i][1] = arrayToManage[i + 1][1];
                arrayToManage[i + 1] = null;
                counter++;
            }
        }
    }
    if(counter) return manageIntervals(arrayToManage)
    return arrayToManage;
}
