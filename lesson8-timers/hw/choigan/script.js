const createRomeNum = (a) => {
    if (a === 1) return 'I'
    else return 'I' + createRomeNum(a - 1)
}

const RomeNumber = { 'I': 1, 'IV': 4, 'V': 5, 'IX': 9, 'X': 10, 'XL': 40, 'L': 50, 'XC': 90, 'C': 100 };
const RomeNumberArr = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C'];

function getRomeNum(f) {
    for (let index = RomeNumberArr.length - 1; index >= 0; index--) {
        const value = RomeNumber[RomeNumberArr[index]];
        if (f >= value) {
            return RomeNumberArr[index] + getRomeNum(f - value)
        }
    }
    return '';
}

console.log(getRomeNum(createRomeNum(81).length));


const arr = [];
function createFunctionCallList() {
    const d = new Date();
    function call() {
        arr.push(d);
        console.log(arr)
    }
    return call()
}

// const a = createFunctionCallList();
createFunctionCallList();

setTimeout(() => {
    createFunctionCallList();
}, 3000);

setTimeout(() => {
    createFunctionCallList();
}, 6000)



