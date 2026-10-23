//1

const numbers1 = [3, 5, 7, 9];
const doubledNumbers = numbers1.map((num) => num * 2);

console.log(doubledNumbers); // [6, 10, 14, 18]

//2
const numbers2 = [10, 20, 30, 40];
let total = 0;

numbers2.forEach((num) => {
    total += num;
});

console.log(total); // 100

//3
const names = ["nika", "ana", "gio"];
const upperCaseNames = names.map((name) => name.toUpperCase());

console.log(upperCaseNames); // ["NIKA", "ANA", "GIO"]

//4
const colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
    console.log(index, color);
});


//5
const users1 = [
    { name: "Nika", age: 20 },
    { name: "Ana", age: 25 },
    { name: "Gio", age: 17 }
];

const userNames = users1.map((user) => user.name);

console.log(userNames); // ["Nika", "Ana", "Gio"]

//6
const users2 = [
    { name: "Nika", age: 20 },
    { name: "Ana", age: 16 },
    { name: "Gio", age: 25 }
];

users2.forEach((user) => {
    if (user.age > 18) {
        console.log(user.name);
    }
});


//7
const products = [
    { name: "Phone", price: 1000 },
    { name: "Laptop", price: 2000 }
];

const discountedProducts = products.map((product) => ({
    ...product,
    price: product.price * 0.9
}));

console.log(discountedProducts);
