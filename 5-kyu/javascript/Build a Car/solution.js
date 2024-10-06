class Car {
  constructor(length, doors) {
    this.length = length;
    this.doors = doors;
    this.body = {component: " " };
    this.chassis = { component: " " };
    this.main();
  }
  main() {
    if (this.length < 7) {
      throw new Error("We cannot build that small car.");
    } else if (this.doors < 1) {
      throw new Error("We cannot enter a doorless car.");
    } else if (this.doors*2 + 3 > this.length) {
      throw new Error("We cannot fit that many doors in that car.");
    } else {
      this.body.component = [this.topLevel(this.length), this.middleLevel(this.length, this.doors)].join("");
      this.chassis.component = this.bottomLevel(this.length);
    }
  }
  topLevel(length) {
    return " " + "_".repeat(length - 3) + "\n";
  }
  middleLevel(length, doors) {
    const array = [];
    for(let i = 0; i < length-1; i++) {
      if (i === 0) array.push("|");
      else if (i === length-2) array.push("\\\n");
      else array.push(" ");
    }
    let end = 1, start = 4;
    for(let j = 0; j < doors; j++) {
      if (j % 2 === 0) {
        this.addWindow(array, length-start);
        start += 2;
      } else {
        this.addWindow(array, end);
        end += 2;
      }
    }
    return array.join("");
  }
  addWindow(array, i) {
      array[i] = "[";
      array[i+1] = "]";
    }
    bottomLevel(length) {
    const array = [];
    for(let i = 0; i < length; i++) {
      array.push("-")
    }
    let end = 1, start = 3;
    for(let j = 0; j < this.wheelCounter(length); j++) {
      if (j % 2 === 0) {
        array[end] = "o";
        end += 2;
      } else {
        array[length - start] = "o";
        start += 2;
      }
    }
    array[length-1] = "'";
    return array.join("");
  }
  wheelCounter(length) {
    if (length <= 10) {
      return 2;
    } else {
      return 2 + Math.floor((length-10) / 2);
    }
  }
}
