export function pyramid(n: number) {
  const array: number[][] = [];
  for(let i = 0; i < n; i++) {
    array.push([1]);
    for(let j = 0; j < i; j++) {
      array[i].push(1);
    }
  }
  return array;
}
