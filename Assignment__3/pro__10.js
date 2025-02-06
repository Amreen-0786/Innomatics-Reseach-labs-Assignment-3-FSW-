function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let classCharge = 0;
    let luggageCharge = 0;

    // Charges based on class type
    if (classType === "Business") {
        classCharge = 200;
    } else if (classType === "First") {
        classCharge = 500;
    }

    // Calculate extra luggage charge
    if (luggageWeight > 20) {
        luggageCharge = Math.ceil((luggageWeight - 20) / 10) * 50;
    }

    // Total flight fare calculation
    let totalFare = baseFare + classCharge + luggageCharge;

    // Applying discount based on user type (Student/Senior)
    if (isStudent) {
        totalFare *= 0.85; // 15% off for students
    } else if (isSenior) {
        totalFare *= 0.90; // 10% off for seniors
    }

    return `Total flight fare: $${totalFare.toFixed(2)}`;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let classType = await getUserInput("Enter class type (Business/First): ");
    let luggageWeight = parseFloat(await getUserInput("How much does your luggage weigh in kg? "));
    let isStudent = await getUserInput("Are you a student? (yes/no): ") === "yes";
    let isSenior = await getUserInput("Are you above 60 years old (Senior)? (yes/no): ") === "yes";

    console.log(calculateFlightFare(classType, luggageWeight, isStudent, isSenior));
    readline.close();
})();
