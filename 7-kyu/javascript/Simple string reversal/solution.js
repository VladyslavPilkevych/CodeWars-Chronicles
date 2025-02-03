function solve(str){
    const chars = str.split("").filter(char => char !== " ").reverse();
    return str.split("").map((char) => char === " " ? " " : chars.shift()).join("");
}