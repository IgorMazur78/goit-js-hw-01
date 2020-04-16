"use strict";
let total = 0;
let input; // undefenid
let message;

while (input !== null) {
  // true 7-14 false 15
  input = prompt(`Введите число`, 0);
  let numbervalue = Number(input);
  if (isNaN(numbervalue)) {
    message = "Вы ввели не число";
    alert(message);
    break;
  }
  total += numbervalue;
}
alert(`Общая сумма равна ${total}`);
