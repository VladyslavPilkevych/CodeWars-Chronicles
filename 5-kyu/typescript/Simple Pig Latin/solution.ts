export const pigIt = (a: string): string =>
  a
    .split(' ')
    .map((i: string) =>
      /^[A-Za-z\s]*$/.test(i) && i.trim().length !== 0
        ? i.slice(1) + i.slice(0, 1) + 'ay'
        : i
    )
    .join(' ');
