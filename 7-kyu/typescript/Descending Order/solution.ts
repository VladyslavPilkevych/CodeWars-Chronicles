export const descendingOrder = (n: number): number => Number(n.toString().split('').map(i=>+i).sort().reverse().join(''));
