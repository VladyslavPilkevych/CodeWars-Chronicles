function solve(arr){
    const seen = new Set();

    for (const num of arr) {
        if (seen.has(-num)) {
            seen.delete(-num);
        } else {
            seen.add(num);
        }
    }

    return [...seen][0];
}
