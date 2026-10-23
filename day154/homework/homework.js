//1

const map1 = new Map();
map1.set("name", "Goga");
map1.set("age", 20);

console.log(map1.get("name")); // Goga
console.log(map1.get("age"));  // 20


//2
let map2 = new Map([
    ["apple", 2],
    ["banana", 3]
]);

console.log(map2.has("apple") ? "არსებობს" : "არ არსებობს");   // არსებობს
console.log(map2.has("orange") ? "არსებობს" : "არ არსებობს");  // არ არსებობს

//3

let map3 = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

map3.delete("b");
console.log(map3); // Map(2) { 'a' => 1, 'c' => 3 }

//4

let map4 = new Map([
    ["x", 1],
    ["y", 2],
    ["z", 3]
]);

map4.clear();
console.log(map4.size === 0 ? "ცარიელია" : "არ არის ცარიელი"); // ცარიელია
console.log("size:", map4.size); // 0

//5
let map5 = new Map([
    ["x", 10],
    ["y", 20],
    ["z", 30]
]);

console.log("--- keys with for...of ---");
for (const key of map5.keys()) {
    console.log(key);
}

console.log("--- keys with forEach ---");
map5.forEach((value, key) => {
    console.log(key);
});

console.log("--- values ---");
for (const value of map5.values()) {
    console.log(value);
}

//6

let map6 = new Map([
    ["apple", 5],
    ["banana", 2],
    ["orange", 8]
]);

console.log("--- value > 4 ---");
map6.forEach((value, key) => {
    if (value > 4) {
        console.log(key, value);
    }
});

//7
const map7 = new Map().set("a", 1).set("b", 2).set("c", 3);
console.log(map7); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

//8
let map8 = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4]
]);

console.log(map8.size > 3 ? "დიდია" : "პატარაა"); // დიდია

//9
let map9 = new Map([
    ["apple", 5],
    ["banana", 2],
    ["orange", 8]
]);

const filteredMap9 = new Map();

map9.forEach((value, key) => {
    if (value > 4) {
        filteredMap9.set(key, value);
    }
});

console.log(filteredMap9); // Map(2) { 'apple' => 5, 'orange' => 8 }

//10

let map10 = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

map10.forEach((value, key) => {
    map10.set(key, value + 10);
});

console.log(map10); // Map(3) { 'a' => 11, 'b' => 12, 'c' => 13 }

//11

let map11 = new Map([
    ["a", 10],
    ["b", 20],
    ["c", 30]
]);

let map11Sum = 0;
map11.forEach((value) => {
    map11Sum += value;
});

const map11Average = map11Sum / map11.size;
console.log("საშუალო:", map11Average); // 20

//12

let word = "javascript";
const letterCountMap = new Map();

for (const letter of word) {
    letterCountMap.set(letter, (letterCountMap.get(letter) || 0) + 1);
}

console.log(letterCountMap);

//13

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenOddMap = new Map();

evenOddMap.set("even", []);
evenOddMap.set("odd", []);

numbers.forEach((num) => {
    if (num % 2 === 0) {
        evenOddMap.get("even").push(num);
    } else {
        evenOddMap.get("odd").push(num);
    }
});

console.log(evenOddMap);
