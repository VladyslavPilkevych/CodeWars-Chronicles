const number = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
    'hundred': 100,
    'thousand': 1000,
    'million': 1000000,
    'and': 0,
};

function parseInt(string) {
    console.log(typeof string);
    const numArr = string.split(' ');
    const result = numArr.reduce((acc, elem, index) => {
        if (elem === 'thousand' && Number(acc) >= 100) {
            return acc + '000';
        } else if ((elem === 'hundred' || elem === 'thousand') && numArr[index - 1].split('').includes('-')) {
            return Number(acc) + Number(numArr[index - 1].split('-').reduce((a, b) => { return Number(a) + Number(number[b]); }, [0]).toString().concat(number[elem].toString().slice(1))) - Number(numArr[index - 1].split('-').reduce((a, b) => { return Number(a) + Number(number[b]); }, [0]));
        } else if ((elem === 'hundred' || elem === 'thousand') && Number(number[numArr[index - 1]]) < 100) {
            return Number(acc) + Number(number[numArr[index - 1]].toString().concat(number[elem].toString().slice(1))) - Number(number[numArr[index - 1]]);
        } else if (elem.split('').includes('-')) {
            return Number(acc) + Number(elem.split('-').reduce((a, b) => { return Number(a) + Number(number[b]); }, [0]));
        } else {
            return Number(acc) + Number(number[elem]);
        }
    }, [0]);
    return Number(result) > 1000000 ? 1000000 : Number(result);
}
