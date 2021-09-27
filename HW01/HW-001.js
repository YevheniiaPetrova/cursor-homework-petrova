const priceJellyfish = 15.678;
const priceWhale = 123.965;
const priceOceanPlastic = 90.2345;

// Task#1
const maxPrice = Math.max(priceJellyfish, priceWhale, priceOceanPlastic);

// Task#2
const minPrice = Math.min(priceJellyfish, priceWhale, priceOceanPlastic);

// Task#3
const totalPrice = priceJellyfish + priceWhale + priceOceanPlastic;

// Task#4
const totalRoundedPrice = Math.trunc(priceJellyfish) + Math.trunc(priceWhale) + Math.trunc(priceOceanPlastic);

// Task#5
const totalRoundToHundretsPrice = (Math.round(totalPrice / 100) * 100);

// Task#6
const isEvenNumber = (Math.trunc(totalPrice) % 2 === 0);

// Task#7
const clientMoney = 500;
const clientChange = clientMoney - totalPrice;

// Task#8
const averagePriceValue = totalPrice / 3;
const roundedAveragePrice = Math.round(averagePriceValue * 100) / 100;

// Task#9
const randomDiscount = Math.floor(Math.random() * 101);
const priceWithDiscount = +(totalPrice * (100 - randomDiscount) / 100).toFixed(2);

const netProfit = priceWithDiscount - totalPrice / 2;

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