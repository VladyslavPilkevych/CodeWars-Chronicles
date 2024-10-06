function digitalRoot(n) {
    let x = n;
    while (x > 9) {
        x = x.toString().split('').reduce((acc, item) => {
            return acc += Number(item);
        }, 0)
    }
    return x;
}
