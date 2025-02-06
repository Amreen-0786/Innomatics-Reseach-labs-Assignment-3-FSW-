function calculateGrade(marks, attendance) {
    if (attendance > 90) {
        marks += 5;  // Extra credit for attendance above 90%
    }

    let grade = '';

    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 80) {
        grade = "B";
    } else if (marks >= 70) {
        grade = "C";
    } else if (marks >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    return grade;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let marks = parseFloat(await getUserInput("Enter your marks: "));
    let attendance = parseFloat(await getUserInput("Enter your attendance percentage: "));
    console.log(`Final grade: ${calculateGrade(marks, attendance)}`);
    readline.close();
})();
