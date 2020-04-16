"use strict";
const ADMIN_PASSWORD = "123456";
const menuPassword = prompt(`Please enter admin password:`);
let message;
if (menuPassword === null) {
  message = "Отменено пользователем";
} else if (menuPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
console.log(message);
alert(message);
