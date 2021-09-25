const priceJellyfish = 15.678;
const priceWhale = 123.965;
const priceOceanPlastic = 90.2345;

// Task#1
const maxPrice = Math.max(priceJellyfish, priceWhale, priceOceanPlastic);
console.log("Найвища ціна: " + maxPrice + " грн.");

// Task#2
const minPrice = Math.min(priceJellyfish, priceWhale, priceOceanPlastic);
console.log("Найнижча ціна: " + minPrice + " грн.");

// Task#3
const totalPrice = priceJellyfish + priceWhale + priceOceanPlastic;
console.log("Загальна вартість товарів: " + totalPrice + " грн.");

// Task#4
const totalRoundedPrice = Math.trunc(priceJellyfish) + Math.trunc(priceWhale) + Math.trunc(priceOceanPlastic);
console.log("Сума вартостей (без копійок): " + totalRoundedPrice + " грн");

// Task#5
const totalRoundToHundretsPrice = (Math.round(totalPrice / 100) * 100);
console.log("Сума товарів округлена до сотень: " + totalRoundToHundretsPrice + " грн.");

// Task#6
const isEvenNumber = (Math.trunc(totalPrice) % 2 === 0);
console.log("Сума товарів, округлена в меншу сторону, є парним числом: " + isEvenNumber);

// Task#7
const clientMoney = 500;
const clientChange = clientMoney - totalPrice;
console.log("Решта при оплаті купюрою " + clientMoney + " грн: " + clientChange + " грн.");

// Task#8
const averagePriceValue = totalPrice / 3;
const roundedAveragePrice = Math.round(averagePriceValue * 100) / 100;
console.log("Середнє значення цін: " + roundedAveragePrice + " грн.");

// Task#9
const randomDiscount = Math.floor(Math.random() * 101);
const priceWithDiscount = (totalPrice * (100 - randomDiscount) / 100).toFixed(2);
console.log("Сума до оплати, з урахуванням випадкової знижки: " + priceWithDiscount + " грн.");

const netProfit = priceWithDiscount - totalPrice / 2;
console.log("Чистий прибуток: " + netProfit + " грн.");

document.writeln(
    `
    Найвища ціна: ${maxPrice} грн. <br>
    Найнижча ціна: ${minPrice} грн. <br>
    Загальна вартість товарів: ${totalPrice} грн. <br>
    Сума вартостей (без копійок): ${totalRoundedPrice} грн. <br>
    Сума товарів (округлена до сотень): ${totalRoundToHundretsPrice} грн. <br>
    Сума товарів є парним числом: ${isEvenNumber} <br>
    Решта (при оплаті купюрою ${clientMoney} грн): ${clientChange} грн. <br>
    Середнє значення цін: ${roundedAveragePrice} грн. <br>
    Сума до оплати (випадкова знижка: ${randomDiscount}%): ${priceWithDiscount} грн. <br>
    Чистий прибуток: ${netProfit} грн.
    `
);