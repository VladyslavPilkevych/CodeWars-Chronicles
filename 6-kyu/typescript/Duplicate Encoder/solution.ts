export function duplicateEncode(word: string){
  return word.toLowerCase().split("").map((elem, index) => {
    const array = word.toLowerCase().split("");
    array.splice(index, 1);
    return array.includes(elem) ? ")" : "(";
  }).join("");
}
