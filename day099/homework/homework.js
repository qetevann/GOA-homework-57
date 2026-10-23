// 1)
const userName = prompt("შეიყვანეთ თქვენი სახელი:");

if (userName[0].toLowerCase() === "g") {
    console.log("you are chad");
} else {
    console.log("still chad");
}


//2)

const name2 = prompt("შეიყვანეთ სახელი:");
const age = Number(prompt("შეიყვანეთ ასაკი:"));

if (name2.toLowerCase() === "გიორგი" && age > 18) {
    console.log("your name is giorgi and you are adult");
} else if (name2.toLowerCase() === "ნიკა" && age < 18 && age > 11) {
    console.log("your name is nika and you are younger");
} else if (
    (name2.toLowerCase() === "saba" || name2.toLowerCase() === "irakli") &&
    age < 11 &&
    age > 5
) {
    console.log("you have nice name but you are too young");
} else {
    console.log("you are not born yet");
}


//3)


let divisibleSum = 0;

for (let i = 1; i <= 60; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        divisibleSum += i;
    }
}

console.log("ჯამი:", divisibleSum);



//4)




for (let i = 40; i >= 1; i--) {
    console.log(i);
}


//5)

let enteredValue = "123";   

if (typeof enteredValue === "string") {
    console.log("you entered string number,so you are wrong");
} else {
    for (let i = 1; i <= enteredValue; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}