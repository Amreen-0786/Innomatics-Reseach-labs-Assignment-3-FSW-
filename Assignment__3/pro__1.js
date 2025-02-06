function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) return "PIN mismatch";
    if (amount > balance) return "Funds are insufficient";
    if (amount % 100 !== 0) return "Please enter an amount in multiples of 100";

    balance -= amount;
    return `Withdrawal successful. Remaining balance: $${balance}`;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let balance = parseFloat(await getUserInput("Input your balance: "));
    let amount = parseFloat(await getUserInput("Input amount to withdraw: "));
    let enteredPin = parseInt(await getUserInput("Input PIN: "));

    const pin = 2713;

    console.log(atmWithdrawal(balance, amount, pin, enteredPin));

    readline.close();
})();
