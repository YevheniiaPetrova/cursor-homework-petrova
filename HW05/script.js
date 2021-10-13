/* Task 1 - Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. */

const getRandomArray = (length, min, max) => {
    const randomNumbers = [];
    for (let i = 0; i < length; i++){
        randomNumbers.push(Math.floor(Math.random() * (max - min + 1) + min));
    }

    return randomNumbers;
}

const numbers = getRandomArray(20, 3, 45);
console.log(`Task1 - random array: ${numbers}`); 


// Task 2 - Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getModa = (...numbers) => {
    const moda = numbers.filter(number => Number.isInteger(number))
                        .sort((a, b) => (numbers.filter(m => m === a).length) - (numbers.filter(m => b === m).length)).pop();
    
    return moda;
}

const moda = getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(moda); 


// Task 3 - Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getAverage = (...numbers) => {
    let summ = 0;
    let numberOfInteger = 0;
    for (let number of numbers) {
        if (Number.isInteger(number)) {
            summ += number;
            numberOfInteger++;
        }
    }

    return summ / numberOfInteger;
}

console.log(`Task 3 - Average number: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) }`);


// Task 4 - Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getMedian = (...numbers) => {
    let median = 0;
    const integerSortedNumbers = numbers.filter(number => Number.isInteger(number)).sort((a, b) => (a - b));

    if (integerSortedNumbers.length % 2) {
        const medianPosition = (integerSortedNumbers.length - 1) / 2;
        median = integerSortedNumbers[medianPosition];
    } else {
        const medianPosition1 = integerSortedNumbers.length / 2 - 1;
        const medianPosition2 = integerSortedNumbers.length / 2;
        median = (integerSortedNumbers[medianPosition1] + integerSortedNumbers[medianPosition2]) / 2;
    }

    return median;
}

console.log(`Task 4 - median of [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]: ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);
console.log(`Task 4 - median of [1, 2, 3, 4]: ${getMedian(1, 2, 3, 4)}`);
console.log(`Task 4 - median of [1, 2, 3, 4, 5]: ${getMedian(1, 2, 3, 4, 5)}`);


// Task 5 - Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
const filterEvenNumbers = (...numbers) => numbers.filter(number => number % 2);
console.log(`Task 5 - even numbers of [1, 2, 3, 4, 5, 6]: ${ filterEvenNumbers(1, 2, 3, 4, 5, 6) }`);

// Task 6 - Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
const countPositiveNumbers = (...numbers) => numbers.filter(number => number > 0).length;
console.log(`Task 6 - positive numbers of [1, -2, 3, -4, -5, 6]: ${ countPositiveNumbers(1, - 2, 3, -4, -5, 6)}`);


// Task 7 - Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
const getDividedByFive = (...numbers) => numbers.filter(number => !(number % 5));
console.log(`Task 7 - numbers divided by five: ${ getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) }`);


/* Task 8 - Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). 
При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") 
Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому. */
const replaceBadWords = (string) => {
    const words = string.toLowerCase().split(' ');
    const badWords = ['shit', 'fuck'];
    let add;
    let replacedWords;

    do {
        add = confirm('Do you want to add another bad word?');
        if (add) {
            const newBadWord = prompt('Write new bad word.');
            if (newBadWord) {
               badWords.push(newBadWord); 
            } else {
                break;
            }
        }
    } while (add);
    
    replacedWords = words.map(word => {
            for (let i = 0; i < badWords.length; i++) {
                let badWord = badWords[i];
                let newWord = badWord.split('').map(letter => '*').join('');
                if (word.includes(badWord)) {
                    word = word.replace(badWord, newWord);
                }
            }
        
        return word;
        });

    return replacedWords.join(' ');
}
console.log(`Task 8 - phrase "Are you fucking kidding?" without bad words: ${ replaceBadWords("Are you fucking kidding?") }`);
console.log(`Task 8 - phrase "Holy shit!" without bad words: ${ replaceBadWords("Holy shit!") }`);
console.log(`Task 8 - phrase "It's bullshit!" without bad words: ${ replaceBadWords("It's bullshit!") }`);


/* Task 9 - Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. 
Пробіли завжди видаляються. Рядок приводится до нижнього регістру. */

const divideByThree = (word) => {
    const wordArr = word.toLowerCase().split('')
    if (wordArr.length <= 3) {
        return wordArr.join('');
    } else {
        const deleted = wordArr.splice(0, 3);
        return deleted.join('') + ' ' + divideByThree(wordArr.join(''));
    }
}
console.log(`Task 9 - Word "Commander" divided by three; ${ divideByThree('Commander') }`);
console.log(`Task 9 - Word "live" divided by three: ${divideByThree('live')}`);


/* Task 10 - Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. 
Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами. */

// const generateCombinations = (word) => {

// }