const zero = (arg) => result(arg, '0');
const one = (arg) => result(arg, '1');
const two = (arg) => result(arg, '2');
const three = (arg) => result(arg, '3');
const four = (arg) => result(arg, '4');
const five = (arg) => result(arg, '5');
const six = (arg) => result(arg, '6');
const seven = (arg) => result(arg, '7');
const eight = (arg) => result(arg, '8');
const nine = (arg) => result(arg, '9');

const result = (arg, number) => arg ? Math.floor(eval(number+arg)) : number;

const plus = (arg) => '+' + arg;
const minus = (arg) => '-' + arg;
const times = (arg) => '*' + arg;
const dividedBy = (arg) => '/' + arg;
