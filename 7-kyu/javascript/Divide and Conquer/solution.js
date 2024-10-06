const divCon = (x) => x.reduce((acc, num) => typeof num === "number" ? acc += num : acc -= num, 0);
