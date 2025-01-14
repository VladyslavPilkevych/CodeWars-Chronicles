function solve(n) {
    n = Number(n);
    let array = [1n];

    for (let i = 1; i <= 2 * n; i++) {
        array[i] = array[i - 1] * BigInt(i);
    }

    return array[2 * n] / (array[n + 1] * array[n]);
}
