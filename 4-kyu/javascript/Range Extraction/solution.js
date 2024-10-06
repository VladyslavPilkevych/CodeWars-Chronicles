function solution(list) {
    const rangeArr = [];
    let counter = 0,
        from = '',
        to = '';
    for (let i = list[0]; i <= list[list.length - 1] + 1; i++) {
        if (list.includes(i)) {
            if (from.length === 0) {
                from = i;
            }
            counter++;
        } else if (counter > 2) {
            to = i - 1;
            rangeArr.push(from + '-' + to);
            from = '';
            to = '';
            counter = 0;
        } else {
            if (counter === 1) {
                rangeArr.push(i - 1);
            } else if (counter === 2) {
                rangeArr.push(i - 2);
                rangeArr.push(i - 1);
            }
            from = '';
            counter = 0;
        }
    }
    return rangeArr.join(',');
}
