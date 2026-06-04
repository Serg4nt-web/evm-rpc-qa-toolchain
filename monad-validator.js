"use strict";

const BLOCKCHAIN_SEGMENT = "Monad_Public_Testnet";
let wallet = prompt("Enter Monad EVM Wallet Address");
let gasPrice = prompt("Enter current Gas Price (Gwei)", "50");
if (gasPrice === null) {
alert("Execution aborted by user");
} 
else if (Number(gasPrice) <= 30) {
alert("Low priority. Fast confirmation not guaranteed");
}
else if (Number(gasPrice) < 100) {
let reviewTransaction = confirm(`Review Transaction:\nWallet: ${wallet}\nGas Price: ${gasPrice} Gwei\nConfirm execution?`);
alert(`User decision recorded: ${reviewTransaction}`);
}
else {
alert("Critical Gas Level! Transaction paused");
}
