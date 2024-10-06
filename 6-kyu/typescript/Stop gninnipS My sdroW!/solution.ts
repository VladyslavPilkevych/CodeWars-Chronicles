export const spinWords = (words: string): string => words.split(' ').map((word: string) => {
    if(word.split('').length >= 5) return word.split('').reverse().join('');
    return word;}).join(' ');
    