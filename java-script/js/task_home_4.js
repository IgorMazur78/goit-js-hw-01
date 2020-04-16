"use strict";
const credits = 23580;
const pricePerDroid = 3000;
const stringPerDroid = prompt(`Order Droid`);
const numberPerDroid = +stringPerDroid;
let totalPrice = numberPerDroid * pricePerDroid;
let balanceСredit = credits - totalPrice;
let message;
if (stringPerDroid === null) {
  message = "Отменено пользователем!";
} else if (totalPrice < credits) {
  message = `Вы купили ${numberPerDroid} дроидов, на счету осталось ${balanceСredit} кредитов`;
} else if (totalPrice > credits) {
  message = `'Недостаточно средств на счету!`;
}
console.log(message);
alert(message);
