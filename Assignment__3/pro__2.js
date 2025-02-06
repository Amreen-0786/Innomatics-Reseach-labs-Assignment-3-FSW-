function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shippingCharge = 0;

    if (orderAmount > 1000) {
        discount = 0.20;
    } else if (orderAmount >= 500) {
        discount = 0.10;
    }

    let amountAfterDiscount = orderAmount - (orderAmount * discount);

    if (amountAfterDiscount > 50) {
        shippingCharge = 0;
    } else {
        shippingCharge = 10;
    }

    return amountAfterDiscount + shippingCharge;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let orderAmount = parseFloat(await getUserInput("Enter the order amount: "));
    console.log(`Final payable amount: $${calculateFinalAmount(orderAmount)}`);
    readline.close();
})();
