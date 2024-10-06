export class G964 {
  public static digPow = (n: number, p: number) => {
    let result: number = 0;
    n.toString()
      .split('')
      .forEach((elem, index) => {
        let num: number = Number(elem);
        for (let i = 0; i < p + index - 1; i++) {
          num *= Number(elem);
        }
        return (result += num);
      });
    return result % n === 0 ? result / n : -1;
  };
}
