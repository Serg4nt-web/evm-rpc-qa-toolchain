"use strict";

let baseAmount = prompt("Enter base reward amount:");
baseAmount = (baseAmount ?? 0);
if (isNaN(baseAmount)) {
    baseAmount = 0;
}
baseAmount = +baseAmount;

let factor = prompt("Enter difficulty factor:");
factor = (factor ?? 1);
if (isNaN(factor)) {
    factor = 1;
}
factor = +factor;

let calculateReward = (a, b) => a ** b;
let result = calculateReward(baseAmount, factor);

if (!result) {
    alert("Zero rewards allocated");
} else {
    alert(`${result}`);
}
