function alphabetPosition(text) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return text.toUpperCase().split("").map((i) => { if (alphabet.includes(i)) return alphabet.indexOf(i) + 1 }).filter(i => { if (i) return i }).join(' ');
}
