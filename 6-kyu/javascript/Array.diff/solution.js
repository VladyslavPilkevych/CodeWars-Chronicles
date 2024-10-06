const arrayDiff = (a, b) => b.length < 1
    ? a
    : a.map((i) => {
        if (!b.includes(i)) return i;
    }).filter((e) => e !== undefined);

// function arrayDiff(a, b) {
//     if (a.length === 0) {
//         return [];
//     }
//     const newA = a.map(item => {
//         if (!b.includes(item)) {
//             return item;
//         }
//     });
//     const c = newA.filter(elem => elem !== undefined);
//     return c;
// }
