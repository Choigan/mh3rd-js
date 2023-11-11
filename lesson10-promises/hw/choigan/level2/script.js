// Level 2 --------------------------------------------------------------------------------
console.log('Подуровень 2.1');
console.log('........................')

// Задание №-2.1-1
function l21z1(str) {
    return str.indexOf('0');
}
console.log('Индес первого нуля в строке: ' + l21z1('55405630'));

// Задание №-2.1-2
function l21z2(number) {
    const arr = [];
    for (let index = 1; index <= number; index++) {
        const numberStr = index.toString().split('');
        const firstNum = numberStr[0];
        const SecondNum = numberStr[1];
        const sum = eval(`${firstNum} + ${SecondNum}`);
        if (sum === 5 && index >= 10) arr.push(Number(numberStr.join('')))
    }
    return arr
}
console.log(l21z2(1000));

// Задание №-2.1-3
function l21z3(arr) {
    const newArr = []
    for (const iterator of arr) {
        if (iterator !== 6) newArr.push(iterator)
    }
    return newArr
}
console.log(l21z3([5, 6, 8, 7, 6, 78]));

// Задание №-2.1-4
function l21z4(arr) {
    let sum = 0;
    for (let index = 0; index < (arr.length / 2); index++) {
        sum += arr[index];
    }
    return `Сумма элементов первой части массива [${arr}] равна: ${sum}`;
}
console.log(l21z4([1, 2, 3, 4, 5, 6]));
//----------------------------------------------------

console.log('')
console.log('Подуровень 2.2');
console.log('........................')

// Задание №-2.2-1
function l22z1(arr) {
    let count = 0;
    for (const iterator of arr) {
        if (iterator < 0) count++
    }
    return `Количество отрицательных чисел в массиве ${arr} равно: ${count}`
}
console.log(l22z1([2, -5, -25, 1, 6, -6]));

// Задание №-2.2-2
function l22z2(arr) {
    const arrPos = arr.filter(item => {
        return item > 0
    })
    return arrPos
}
console.log(l22z2([2, -5, -25, 1, 6, -6]));

// Задание №-2.2-3
function l22z3(str) {
    arr = [];
    for (let index = 0; index < str.length; index++) {
        const a = str[str.length - 2]
        if (str[index] != a) arr.push(str[index])
    }
    return arr.join('')
}
console.log(l22z3('String'));

// Задание №-2.2-4
function l22z4(arr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let index = 0; index < arr.length; index++) {
        if (index < (arr.length / 2)) sum1 += arr[index];
        else sum2 += arr[index]
    }
    return `Результатом деления первой части массива на вторую часть будет: ${sum1 / sum2}`;
}
console.log(l22z4([1, 2, 3, 4, 5, 6]));
//----------------------------------------------------

console.log('')
console.log('Подуровень 2.3');
console.log('........................')

// Задание №-2.3-1
function l23z1(str1, str2) {
    const firstLetter = str2[0];
    const LastLetter = str1[str1.length - 1];
    if (firstLetter.toLowerCase() === LastLetter.toLowerCase()) return `Последний символ ${str1} и первый символ ${str2} совпадают`
    else return `Последний символ ${str1} и первый символ ${str2} не совпадают`
}
console.log(l23z1('String', 'Global'));

// Задание №-2.3-2
function l23z2(str) {
    const arr = [];
    for (let index = 0; index < str.length; index++) {
        if (str[index].indexOf('0') !== -1) arr.push(index)
    }
    return `Позиция третьего нуля в строке ${str} равна ${arr[2]}`
}
console.log(l23z2('1404056060340650'));

// Задание №-2.3-3
function l23z3(str) {
    const arr = str.split(',');
    const sum = arr.reduce((acc, item) => {
        return eval(acc + '+' + item)
    }, 0)
    return `Сумма элементов строки '${str}' равна: ${sum}`
}
console.log(l23z3('12,34,56'));

// Задание №-2.3-4
function l23z4(str) {
    const arr = str.split('-');
    const obj = {
        year: arr[0],
        month: arr[1],
        day: arr[2],
    }
    return obj
}
console.log(l23z4('2025-12-31'));
//----------------------------------------------------

console.log('')
console.log('Подуровень 2.3');
console.log('........................')

// Задание №-2.4-1
function l24z1(str) {
    const strSplit = str.split('');
    const arrIndex = [];
    strSplit.forEach((element, index) => {
        if (!isNaN(element)) arrIndex.push(index)
    })
    return arrIndex.length > 0 ? `Позиция первой цифры в строке ${str} равна: ${arrIndex[0] + 1}` : `В строке ${str} нет цифр`
}
console.log(l24z1('Stf3df445gfdg443fdg'));

// Задание №-2.4-2
function l24z2(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj)
    return { keys, values }
}
console.log(l24z2({ name: 'Bill', age: 18, }));

// Задание №-2.4-3
function l24z3(number) {
    let count = 0;
    const strNumber = number.toString();
    for (const iterator of strNumber) {
        if (iterator % 2 === 0) count++
    }
    return `Количество четных цифр в числе ${number} равно ${count}`
}
console.log(l24z3(64572156));

// Задание №-2.4-4
function l24z4(str) {
    const arr = [];
    const strSplit = str.split('')
    strSplit.forEach((item, index) => {
        if ((index + 1) % 2) arr.push(item.toUpperCase())
        else arr.push(item)
    })
    return arr
}
console.log(l24z4('abcde'));

// Задание №-2.4-4
function l24z4(str) {
    const arr = [];
    const strSplit = str.split(' ')
    strSplit.forEach((item) => {
        for (let index = 0; index < item.length; index++) {
            if (index === 0) arr.push(item[index].toUpperCase())
            else arr.push(item[index])
        }
        arr.push(' ')
    })
    return arr.join('');
}
console.log(l24z4('aaa bbb ccc'));