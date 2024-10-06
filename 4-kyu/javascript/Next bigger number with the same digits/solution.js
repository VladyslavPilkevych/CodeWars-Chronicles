function nextBigger(startNumber) {
    const startNumberArr = startNumber.toString().split('');
    if (JSON.stringify(startNumberArr) === JSON.stringify(startNumber.toString().split('').sort().reverse())) {
        return -1;
    }
    if (startNumberArr.length > 5) {
        const counter = prepareToConvertingBigNums(startNumberArr);
        if (counter > 7) {
            let flag = false;
            const slicedArray = [...startNumberArr.slice(-counter)].map((elem, index) => {
                if (elem > [...startNumberArr.slice(-counter)][[...startNumberArr.slice(-counter)].length - 1] && !flag) {
                    flag = elem;
                    return [...startNumberArr.slice(-counter)][[...startNumberArr.slice(-counter)].length - 1];
                } else {
                    return elem;
                }
            });
            slicedArray.pop();
            slicedArray.unshift(flag);
            return Number(startNumber.toString().slice(0, -counter) + slicedArray.join(''));
        } else if (startNumberArr.length > counter) {
            return Number(startNumber.toString().slice(0, -counter) + nextBigger(+startNumber.toString().slice(-counter)))
        }
    }
    let uniqueNums = [...new Set(startNumberArr)];
    if (uniqueNums.length === 1) {
        return -1;
    }
    const shuffledArr = [];
    for (let i = 0; i < startNumberArr.length; i++) {
        if (+startNumberArr[i] !== 0) shuffledArr.push(shuffleArr(startNumberArr[i], startNumberArr));
    }
    const resultArr = [...new Set(ascentingArray(shuffledArr, startNumber))].map(elem => +elem).sort();
    return resultArr[resultArr.indexOf(startNumber) + 1];
}
function prepareToConvertingBigNums(arr) {
    const revArr = arr;
    revArr.reverse();
    let counter = 0;
    do {
        counter++;
    } while (revArr[counter] >= revArr[counter - 1])
    while (+revArr[counter] === 0) {
        counter++;
    }
    counter++;
    return counter;
}
function flatArr(arr, firstElem, numArr, startNumber) {
    let str;
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] && Array.isArray(arr[i])) {
            str = flatArr(arr[i], firstElem + arr[0], numArr, startNumber);
        } else {
            str = firstElem + arr[0];
        }
    }
    if (str.length === startNumber.toString().length) {
        numArr.push(str);
    }
    return str;
}

function ascentingArray(arr, startNumber) {
    const oldArr = [...arr];
    const newArr = [];
    for (let i = 0; i < oldArr.length; i++) {
        flatArr(oldArr[i], '', newArr, startNumber);
    }
    return newArr;
}

function shuffleArr(firstNum, arr) {
    const splitArr = [...arr];
    splitArr.splice(splitArr.indexOf(firstNum), 1);
    const result = [firstNum];
    for (let i = 0; i < splitArr.length; i++) {
        result.push(shuffleArr(splitArr[i], splitArr))
    }
    return result;
}
