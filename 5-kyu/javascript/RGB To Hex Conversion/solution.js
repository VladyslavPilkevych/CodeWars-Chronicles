function rgb(r, g, b) {
  const arr = [r, g, b];
  return arr.map((num) => {
    console.log(num);
    if (num >= 255) return 'FF';
    else if (num < 0) return '00';
    else if (num >= 0 && num < 10) return '0' + num;
    else return '' + convertToLetters(Math.floor(num / 16)) + convertToLetters(num % 16);
  }).join('');
}
function convertToLetters(n) {
  switch (n) {
    case 10: return 'A';
    case 11: return 'B';
    case 12: return 'C';
    case 13: return 'D';
    case 14: return 'E';
    case 15: return 'F';
    default: return n;
  }
}
