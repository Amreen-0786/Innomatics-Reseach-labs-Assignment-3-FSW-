function isEligibleForJob(age, experience, qualification) {
    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree") {
        return "You are eligible for the job";
    } else {
        return "Sorry, you do not meet the requirements for this job";
    }
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let age = parseInt(await getUserInput("Enter your age: "));
    let experience = parseInt(await getUserInput("Enter your years of experience: "));
    let qualification = await getUserInput("Enter your qualification: ");
    console.log(isEligibleForJob(age, experience, qualification));
    readline.close();
})();
