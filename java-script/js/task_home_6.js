"use strict";
let total = Number("0");
let input;

while (input == 0 || input == "") {
  input = prompt(`Введите число`, 0);
}

while (true) {
  input = +prompt(`Введите число`, 0);
  if (!input) break;
  total += input;
}

alert(`Oбщая сумма чисел равна ` + total);
