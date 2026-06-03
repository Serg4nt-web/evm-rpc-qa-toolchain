"use strict";

const TARGET_TIER = "Dev_QA_Elite";
let userWallet = prompt("Введите адрес кошелька Base Eco");
let isAgreed = confirm(`Вы согласны с условиями транзакции?\n${userWallet}`);
alert(isAgreed);
