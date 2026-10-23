//1

const promise1 = new Promise((resolve) => {
    resolve("Hello World");
});

promise1.then((result) => {
    console.log(result); 
});


//2

const promise2 = new Promise((resolve) => {
    resolve(10);
});

promise2.then((result) => {
    console.log(result); // 10
});


//3

const promise3 = new Promise((resolve) => {
    resolve("JavaScript");
});

promise3.then((result) => {
    console.log(result + " is awesome"); 
});


//4

const promise4 = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

promise4.catch((error) => {
    console.log(error); 
});


//5

const number = 8;

const promise5 = new Promise((resolve, reject) => {
    if (number % 2 === 0) {
        resolve("Even");
    } else {
        reject("Odd");
    }
});

promise5
    .then((result) => console.log(result))   
    .catch((error) => console.log(error));


//6

const age = 20;

const promise6 = new Promise((resolve, reject) => {
    if (age >= 18) {
        resolve("Access granted");
    } else {
        reject("Access denied");
    }
});

promise6
    .then((result) => console.log(result))   
    .catch((error) => console.log(error));



//7

const promise7 = new Promise((resolve) => {
    resolve(5);
});

promise7.then((result) => {
    console.log(result * 2);
});