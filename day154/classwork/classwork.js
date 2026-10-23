

const userMap = new Map([
    ["name", "გიორგი"],
    ["age", 25],
    ["city", "თბილისი"],
    ["profession", "დეველოპერი"],
    ["hobby", "ფოტოგრაფია"]
]);

console.log(userMap);



userMap.set("email", "giorgi@example.com");
console.log("დამატების შემდეგ:", userMap);



userMap.set("city", "ბათუმი");
console.log("city შეცვლის შემდეგ:", userMap.get("city"));



userMap.delete("hobby");
console.log("hobby წაშლის შემდეგ:", userMap);




console.log('არის თუ არა "name" key:', userMap.has("name"));




console.log("ელემენტების რაოდენობა:", userMap.size);


console.log("--- keys ---");
for (const key of userMap.keys()) {
    console.log(key);
}


console.log("--- values ---");
userMap.forEach((value) => {
    console.log(value);
});