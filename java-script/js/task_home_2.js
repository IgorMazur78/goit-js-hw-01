"use strict";
console.log(---task-3---)
const total = 100;
const ordered = 80;
let result;
if (ordered >= total) {
  result = `На складе недостаточно товаров!`;
} else {
  result = `Заказ оформлен, с вами свяжется менеджер`;
}
console.log(result);
