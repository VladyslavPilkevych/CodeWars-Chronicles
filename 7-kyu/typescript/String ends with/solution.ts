export function solution(str: string, ending: string): boolean {
    const array: string[] = str.split('');
    const reverseArr: string[] = array.reverse();
    const arrayEnding: string[] = ending.split('');
    if (arrayEnding.length === 0) return true;
    const reverseEndArr: string[] = arrayEnding.reverse();
    for (let i = 0; i < reverseEndArr.length; i++) {
        if (reverseEndArr[i] !== reverseArr[i]) {
            return false;
        }
    }
    return true;
}
