function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    let planSuggestion = "";

    if (planType === "Basic") {
        planSuggestion = "Basic plan: $20/month - Gym access only.";
    } else if (planType === "Premium" && wantsTrainer) {
        planSuggestion = "Premium plan: $50/month - Gym + Personal Trainer.";
    } else if (planType === "VIP" && wantsTrainer && wantsDietPlan) {
        planSuggestion = "VIP plan: $80/month - Gym + Trainer + Diet Plan.";
    } else {
        planSuggestion = "Please verify your selections. Something is missing.";
    }

    return planSuggestion;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let planType = await getUserInput("Enter the type of membership plan you want (Basic, Premium, VIP): ");
    let wantsTrainer = await getUserInput("Do you want a personal trainer? (yes/no): ");
    let wantsDietPlan = await getUserInput("Do you want a diet plan? (yes/no): ");

    console.log(choosePlan(planType, wantsTrainer === "yes", wantsDietPlan === "yes"));
    readline.close();
})();
