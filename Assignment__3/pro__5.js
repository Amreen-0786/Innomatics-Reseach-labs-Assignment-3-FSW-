function calculateTicketPrice(age, showTime) {
    let price = 12; // Standard price for a movie ticket

    // Apply matinee discount (before 5 PM)
    if (showTime < 17) {
        price *= 0.8; // 20% off for matinee shows
    }

    // Apply senior citizen discount (above 60)
    if (age > 60) {
        price *= 0.7; // 30% off for seniors
    }

    // Apply children discount (below 12)
    if (age < 12) {
        price *= 0.6; // 40% off for children
    }

    return price;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let age = parseInt(await getUserInput("Enter age of the customer: "));
    let showTime = parseInt(await getUserInput("Enter the show time in 24-hour format (e.g., 14 for 2 PM): "));
    console.log(`Total ticket price: $${calculateTicketPrice(age, showTime).toFixed(2)}`);
    readline.close();
})();
