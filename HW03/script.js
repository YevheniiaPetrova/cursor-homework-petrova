// Task1
const getMaxDigit = (number) => {
    const stringNumber = String(number);
    let maxDigit = stringNumber[0];
    for (let i = 1; i < stringNumber.length; i++) {
        if (Number(maxDigit) < Number(stringNumber[i])) {
            maxDigit = stringNumber[i];
       }
    }
    return maxDigit;
};

// Task2
const getNumberPower = (number, pow) => {
    let result = 1; //result is correct if pow = 1
    for (let i = 0; i < pow; i++) {
        result *= number;
    }
    return result;
};

// Task3
const fixNameSpelling = (name) => {
    let fixedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return fixedName;
};

// Task4
const getAmmountWithoutTaxes = (ammount) => ammount - ammount * 19.5 / 100;

// Task5
const getRandomNumber = (numberN, numberM) => {
    const randomNumber = Math.floor(Math.random() * (numberM - numberN + 1) + numberN);
    return randomNumber;
};

// Task6
const countLetter = (letter, word) => {
    let numberOfRepeats = 0;
    for (let i = 0; i < word.length; i++) {
        if (letter.toLowerCase() === word[i].toLowerCase()) {
            numberOfRepeats++;
        }
    }
    return numberOfRepeats;
};

// Task7
const convertCurrency = (money) => {
    const hryvnia = 'uah';
    const dollar = '$';
    const exchangeRate = 25;
    let result = 0;
    if (money.toLowerCase().includes(hryvnia)) {
        result = parseInt(money) / exchangeRate + '$';
    } else if (money.includes(dollar)) {
        result = parseInt(money) * exchangeRate + 'грн';
    } else {
        result = 'not exchangable currency.';
    }
    return result;
};

// Task8
const getRandomPassword = (length = 8) => {
    let password = '';
    for (let i = 0; i < length; i++){
        password += Math.floor(Math.random() * 10);
    }
    return password;
};

// Task9
const deleteLetters = (letter, word) => {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        if (letter.toLowerCase() === word[i].toLowerCase()) {
            continue;
        } else {
            newWord += word[i];
        }
    }
    return newWord;
};

// Task10
const isPalyndrom = (word) => {
    let isPalyndrom = true;
    const newWord = word.replace(/\s/g, '').toLowerCase();
    for (let i = 0, j = newWord.length - 1; i < newWord.length; i++, j--) {
        if (newWord[i] !== newWord[j]) {
            isPalyndrom = false;
            break;
        }
    }
    return isPalyndrom;
};

// Task11
const deleteDuplicateLetters = (word) => {
    const newWord = word.replace(/\s/g, '').toLowerCase();
    let result = newWord;
    for (let i = 0; i < newWord.length; i++) {
        for (let j = i + 1; j < newWord.length; j++) {
            if (newWord[i] === newWord[j]) {
                result = result.replaceAll(newWord[i], '');
            }
        }
    }
    return result;
};

console.log(getNumberPower(3, 3)); // 1
console.log(getNumberPower(5, 3)); // 2
console.log(fixNameSpelling('євГЕн')); // 3
console.log(getAmmountWithoutTaxes(1000)); // 4
console.log(getRandomNumber(1, 10)); // 5
console.log(countLetter('а', 'Асталавіста')); // 6
console.log(convertCurrency('100$')); // 7
console.log(getRandomPassword(4)); // 8
console.log(deleteLetters('a', 'blablabla')); // 9
console.log(isPalyndrom('Я несу гусеня')); // 10
console.log(deleteDuplicateLetters('Бісквіт був дуже ніжним')); // 11