export function playPass(s: string, n: number): string {
  const alphabet: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  return s.split('').map((item, index) => {
    if (alphabet.includes(item)) {
      const newLetterIndex: number = alphabet.indexOf(item) + n < 26
        ? alphabet.indexOf(item) + n
        : (alphabet.indexOf(item) + n) - alphabet.length;
      return index % 2 ? alphabet[newLetterIndex]?.toLowerCase() : alphabet[newLetterIndex];
    } else if (!isNaN(Number(item)) && item !== " ") {
      return (9 - Number(item)).toString();
    } else {
      return item;
    }
  }).reverse().join('');
}
