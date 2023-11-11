// Level 1 --------------------------------------------------------------------------------
console.log('Подуровень 1.1');
console.log('........................')

// Задание №-1.1-1
function l11z1(number) {
    if (number < 0) return `Число ${number} отрицательно`;
    else return `Число ${number} положительно`;
}
console.log(l11z1(5));

// Задание №-1.1-2
function l11z2(str) {
    return `Длина строки ${str} равна: ${str.length}`;
}
console.log(l11z2('String'));

// Задание №-1.1-3
function l11z3(str) {
    return `Последний символ строки ${str}: ${str[str.length - 1]}`;
}
console.log(l11z3('String'));

// Задание №-1.1-4
function l11z4(number) {
    if (number % 0) return `Число ${number} четно`;
    else return (`Число ${number} нечетно`);
}
console.log(l11z4(9));

// Задание №-1.1-5
function l11z5(str1, str2) {
    if (str1.toLowerCase().slice(0, 1) === str2.toLowerCase().slice(0, 1)) return `Первые буквы строк ${str1} и ${str2} совпадают`;
    else return `Первые буквы строк ${str1} и ${str2} не совпадают`;
}
console.log(l11z5('String', 'Strong'));

// Задание №-1.1-6
function l11z6(str) {
    return (str[str.length - 1] == 'ь') ?
        `Последний символ строки ${str}: ${str[str.length - 2]}` :
        `Последний символ строки ${str}: ${str[str.length - 1]}`
}
console.log(l11z6('Ночь'))
//----------------------------

console.log('')
console.log('Подуровень 1.2');
console.log('........................')

// Задание №-1.2-1
function l12z1(number) {
    const numberStr = number.toString();
    return `Первая цифра числа ${number}: ${numberStr[0]}`
}
console.log(l12z1(5689));

// Задание №-1.2-2
function l12z2(number) {
    const numberStr = number.toString();
    return `Последняя цифра числа ${number}: ${numberStr[numberStr.length - 1]}`
}
console.log(l12z2(5689));

// Задание №-1.2-3
function l12z3(number) {
    const numberStr = number.toString();
    const sum = `${numberStr[0]} + ${numberStr[numberStr.length - 1]}`;
    return `Сумма первой и последней цифр числа ${number} равны: ${eval(sum)}`;
}
console.log(l12z3(5689));

// Задание №-1.2-4
function l12z4(number) {
    const numberStr = number.toString();
    return `Количество цифр в числе ${number} равно: ${numberStr.length}`;
}
console.log(l12z4(5689));

// Задание №-1.2-5
function l12z5(number1, number2) {
    const numberStr1 = number1.toString();
    const numberStr2 = number2.toString();
    return (numberStr1[0] === numberStr2[0]) ?
        (`Первые цифры чисел ${number1} и ${number2} совпадают`) :
        (`Первые цифры чисел ${number1} и ${number2} не совпадают`)
}
console.log(l12z5(5689, 5745));
//-------------------------

console.log('')
console.log('Подуровень 1.3');
console.log('........................')

// Задание №-1.3-1
function l13z1(str) {
    return (str.length > 1) ? (`Предпоследний символ строки ${str}: ${str[str.length - 2]}`) : (`Длина строки ${str} меньше 2`)
}
console.log(l13z1('String'));

// Задание №-1.3-2
function l13z2(number1, number2) {
    return (number1 % number2) ?
        (`Число ${number1} не делится на число ${number2} без остатка`) :
        (`Число ${number1} делится на число ${number2} без остатка, ответом будет ${number1 / number2}`)
}
console.log(l13z2(4, 3));
//-------------------------

console.log('')
console.log('Подуровень 1.4');
console.log('........................')

// Задание №-1.4-1
function l14z1(number) {
    const arr = [];
    for (let index = 0; index < number; index++) {
        arr.push(index + 1)
    }
    return arr.join(' ')
}
console.log(l14z1(100));

// Задание №-1.4-2
function l14z2(number) {
    const arr = [];
    for (let index = 0; index > number; index--) {
        arr.push(index - 1)
    }
    return arr.reverse().join(' ')
}
console.log(l14z2(-100));

// Задание №-1.4-3
function l14z3(number) {
    const arr = [];
    for (let index = 0; index < number; index++) {
        arr.push(index + 1)
    }
    return arr.reverse().join(' ')
}
console.log(l14z3(100));

// Задание №-1.4-4
function l14z4(number) {
    const arr = [];
    for (let index = 0; index < number; index++) {
        if (index % 2) arr.push(index + 1);
    }
    return arr.join(' ')
}
console.log(l14z4(100));

// Задание №-1.4-5
function l14z5(number) {
    const arr = [];
    for (let index = 0; index <= number; index++) {
        if (index % 3 === 0 && index != 0) arr.push(index);
    }
    return arr.join(' ')
}
console.log(l14z5(100));
//-------------------------

console.log('')
console.log('Подуровень 1.5');
console.log('........................')

// Задание №-1.5-1
function l15z1(number) {
    let sum = 0;
    for (let index = 1; index <= number; index++) {
        sum += index;
    }
    return `Сумма чисел от 1 до ${number} равна: ${sum}`
}
console.log(l15z1(100));

// Задание №-1.5-2
function l15z2(number) {
    let sum = 0;
    for (let index = 1; index <= number; index++) {
        if (index % 2 === 0) sum += index;
    }
    return `Сумма четных чисел от 1 до ${number} равна: ${sum}`
}
console.log(l15z2(100));

// Задание №-1.5-3
function l15z3(number) {
    let sum = 0;
    for (let index = 1; index <= number; index++) {
        if (index % 2) sum += index;
    }
    return `Сумма нечетных чисел от 1 до ${number} равна: ${sum}`
}
console.log(l15z3(100));

// Задание №-1.5-4
function l15z4(number1, number2) {
    const number = number1 % number2;
    return `Остаток деления числа ${number1} на число ${number2} равна: ${number}`
}
console.log(l15z4(100, 49));

// Задание №-1.5-5
function l15z5(str) {
    return `Символы строки ${str} в обратном порядке: ${str.split('').reverse().join()}`
}
console.log(l15z5('String'));
//-------------------------

console.log('')
console.log('Подуровень 1.6');
console.log('........................')

// Задание №-1.6-1
function l16z1(arr) {
    const arrSquare = arr.map(item => item * item);
    const sumArr = arrSquare.reduce((acc, item) => {
        return acc + item;
    }, 0)
    return `Сумма квадратов элементов массива [${arr}] равна: ${sumArr}`;
}
console.log(l16z1([1, 2, 3]));

// Задание №-1.6-2
function l16z2(arr) {
    const arrSqrt = arr.map(item => Math.sqrt(item));
    const sumArr = arrSqrt.reduce((acc, item) => {
        return acc + item;
    }, 0)
    return `Сумма квадратных корней элементов массива [${arr}] равна: ${sumArr}`;
}
console.log(l16z2([4, 4, 9]));

// Задание №-1.6-3
function l16z3(arr) {
    const arrFilter = arr.filter(item => (item > 0));
    const sumArr = arrFilter.reduce((acc, item) => {
        return acc + item;
    }, 0)
    return `Сумма положительных элементов массива [${arr}] равна: ${sumArr}`;
}
console.log(l16z3([4, -4, -9, 6]));

// Задание №-1.6-4
function l16z4(arr) {
    const arrFilter = arr.filter(item => (item > 0 && item < 10));
    const sumArr = arrFilter.reduce((acc, item) => {
        return acc + item;
    }, 0)
    return `Сумма элементов массива [${arr}] которые больше 0 и меньше 10, равна: ${sumArr}`;
}
console.log(l16z4([4, 8, -9, 10]));
//-------------------------

console.log('')
console.log('Подуровень 1.7');
console.log('........................')

// Задание №-1.7-1
function l17z1(str) {
    return str.split('')
}
console.log(l17z1('abcde'));

// Задание №-1.7-2
function l17z2(number) {
    const numStr = number.toString();
    const arr = numStr.split('');
    return arr.map(item => Number(item));
}
console.log(l17z2(24562));

// Задание №-1.7-3
function l17z3(number) {
    const numStr = number.toString();
    const arr = numStr.split('');
    return `Перевернутое число от ${number} равно ${arr.map(item => Number(item)).reverse().join('')}`;
}
console.log(l17z3(24569));

// Задание №-1.7-4
function l17z4(number) {
    const numStr = number.toString().split('');
    const numArr = numStr.map(item => Number(item));
    const sum = numArr.reduce((acc, item) => {
        return acc + item;
    }, 0);
    return `Сумма элементов числа ${numStr.join('')} равна ${sum}`;
}
console.log(l17z4(12345));
//-------------------------

console.log('')
console.log('Подуровень 1.8');
console.log('........................')

// Задание №-1.8-1
function l18z1(number) {
    arr = [];
    for (let index = 1; index <= number; index++) {
        arr.push(index)
    }
    return arr;
}
console.log(l18z1(10));

// Задание №-1.8-2
function l18z2(number) {
    arr = [];
    for (let index = 1; index <= number; index++) {
        if (index % 2 === 0) arr.push(index);
    }
    return arr;
}
console.log(l18z2(100));

// Задание №-1.8-3
function l18z3(arr) {
    const arrRound = arr.map(item => {
        return item.toFixed(1)
    });
    return arrRound;
}
console.log(l18z3([1.456, 2.125, 3.32, 4.1, 5.34]));
//-------------------------

console.log('')
console.log('Подуровень 1.9');
console.log('........................')

// Задание №-1.9-1
function l19z1(arr) {
    const newArr = [];
    for (const item of arr) {
        if (item.slice(0, 7) === 'http://') newArr.push(item)
    }
    return newArr
}
console.log(l19z1(['http://google.com', 'yandex.ru', 'https://facebook.com']));

// Задание №-1.9-2
function l19z2(arr) {
    const newArr = [];
    for (const item of arr) {
        if (item.slice(-5) === '.html') newArr.push(item)
    }
    return newArr
}
console.log(l19z2(['index.html', 'style.css', 'File.html.js']));

// Задание №-1.9-3
function l19z3(arr) {
    const newArr = [];
    for (const item of arr) {
        newArr.push(item + (item * 10 / 100))
    }
    return newArr
}
console.log(l19z3([100, 200, 45, 67, 354]));
//-------------------------

console.log('')
console.log('Подуровень 1.10');
console.log('........................')

// Задание №-1.10-1
function l110z1(number) {
    const newArr = [];
    for (let index = 0; index < number; index++) {
        const rendomElement = Math.floor(Math.random() * 100 + 1);
        newArr.push(rendomElement)
    }
    return newArr
}
console.log(l110z1(5));

// Задание №-1.10-2
function l110z2(number) {
    const arr = [];
    const numSplit = number.toString().split('').reverse();
    for (const item of numSplit) {
        arr.push(Number(item))
    }
    return arr
}
console.log(l110z2(12345));

// Задание №-1.10-3
function l110z3(arr) {
    const newArr = [];
    for (let index = 0; index < arr.length; index += 2) {
        const array = [];
        array.push(arr[index]);
        array.push(arr[index + 1])
        newArr.push(array)
    }
    return newArr
}
console.log(l110z3([1, 2, 3, 4, 5, 6]));

// Задание №-1.10-4
function l110z4(arr1, arr2) {
    const arr3 = [...arr1, ...arr2];
    return arr3
}
console.log(l110z4([1, 2, 3], [4, 5, 6]));