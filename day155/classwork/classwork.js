

const mySet = new Set([1, 2, 2, 3, 3, 3, 4]);
console.log(mySet); // Set(4) { 1, 2, 3, 4 }


mySet.add(5).add(6).add(7);
console.log("დამატების შემდეგ:", mySet); // Set(7) { 1, 2, 3, 4, 5, 6, 7 }


const firstElement = mySet.values().next().value;
mySet.delete(firstElement);

console.log(`წაშლილია პირველი ელემენტი (${firstElement}):`, mySet);



console.log("არის თუ არა 5 Set-ში:", mySet.has(5)); // true
console.log("არის თუ არა 100 Set-ში:", mySet.has(100)); // false


console.log("Set-ის ზომა:", mySet.size);


const setEntries = mySet.entries();

[...setEntries].forEach((pair) => {
    console.log(pair);
});

mySet.clear();
console.log("გასუფთავების შემდეგ:", mySet); // Set(0) {}
console.log("ზომა გასუფთავების შემდეგ:", mySet.size); // 0