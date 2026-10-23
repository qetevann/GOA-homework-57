//1
function checkNumber(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}


//2

function gradeCategory(score) {
    return score < 0 || score > 100
        ? "Invalid score"
        : score >= 90
        ? "Excellent"
        : score >= 75
        ? "Good"
        : score >= 50
        ? "Average"
        : "Fail";
}


//3
function triangleType(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

//4
function numberStatus(num) {
    return num === 0
        ? "Zero"
        : num % 2 === 0
        ? (num > 0 ? "Positive Even" : "Negative Even")
        : (num > 0 ? "Positive Odd" : "Negative Odd");
}

//5
function login(username, password) {
    const correctUsername = "admin";
    const correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {
        return "Welcome";
    } else if (username === correctUsername && password !== correctPassword) {
        return "Wrong password";
    } else {
        return "Access denied";
    }
}

const enteredUsername = prompt("შეიყვანეთ username:");
const enteredPassword = prompt("შეიყვანეთ password:");

console.log(login(enteredUsername, enteredPassword));

