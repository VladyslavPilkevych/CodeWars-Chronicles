export const isPangram = (phrase: string): boolean => {
  return phrase.split('').reduce((acc: string[], elem: string) => {
    if (
      !acc.includes(elem) &&
      /^([a-zA-Z])$/.test(elem) &&
      !acc.includes(elem.toLowerCase())
    ) {
      acc.push(elem.toLowerCase());
    }
    return acc;
  }, []).length === 26
    ? true
    : false;
};
