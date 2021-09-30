let firstNumber;
do {
    firstNumber = prompt("Введіть ціле число.");
} while (firstNumber.trim().length === 0 || !Number.isInteger(+firstNumber) || isNaN(parseInt(firstNumber)));
const numberN = Number(firstNumber);

let secondNumber;
do {
    secondNumber = prompt("Введіть ціле число більше, ніж попереднє.");
} while (secondNumber.trim().length === 0 || !Number.isInteger(+secondNumber) || isNaN(parseInt(secondNumber)) || numberN >= (+secondNumber));
const numberM = Number(secondNumber);

let summ = 0;
const sumOnlyEvenNumbers = confirm("Додавати лише непарні числа?");

for (let i = numberN; i <= numberM; i++){
    if (sumOnlyEvenNumbers && (i % 2 === 0)) {
        continue;
    }
        summ += i;
}

if (sumOnlyEvenNumbers) {
    document.writeln(`Сума усіх непарних чисел від ${numberN} до ${numberM} = ${summ}`); 
} else {
    document.writeln(`Сума усіх цілих чисел від ${numberN} до ${numberM} = ${summ}`);
    };