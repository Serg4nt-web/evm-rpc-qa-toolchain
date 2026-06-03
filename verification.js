"use strict";

let userWallet = prompt("Введите адрес кошелька Base Eco");
let isAgreed = confirm(`Проверьте данные транзакции!\nАдрес: ${userWallet}\nВы подтверждаете отправку?`);
alert(`Подтверждение: ${isAgreed}`);
