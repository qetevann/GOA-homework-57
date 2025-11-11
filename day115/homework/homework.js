// 1)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე მისი მთელი ნაწილი Math.floor()-ის გამოყენებით.

let num1 = parseFloat(prompt('enter number'))
console.log(Math.floor(num1))

// 2)მომხმარებელს შემოატანინე ათწილადი და გამოიტანე მისი მომდევნო მთელი რიცხვი Math.ceil()-ის გამოყენებით.

let num2 = parseFloat(prompt('enter decimal: '))
console.log(Math.ceil(num2))

// 3)შექმენი ორი ცვლადი — a და b, მიენიჭე მათ რიცხვები და გამოიტანე რომელი მათგანი უფრო დიდია Math.max()-ის გამოყენებით.

let a = 7
let b = 12
console.log(Math.max(a, b))

// 4)შექმენი სამი ცვლადი და შეინახე სამივეში რიცხვი --> გამოიტანე მათგან მინიმალური მნიშვნელობა Math.min()-ის გამოყენებით.


let q = 10
let w = 3
let e = 8
console.log(Math.min(q, w, e))


// 5)დააგენერირე შემთხვევითი რიცხვი 0-დან 1-მდე Math.random()-ის გამოყენებით.

console.log(Math.random())

// 6)დააგენერირე შემთხვევითი  (მთელი) რიცხვი 1-დან 10-მდე, Math.random()-ისა და Math.floor()-ის კომბინაციით.



// 7)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე მისი კვადრატული ფესვი Math.sqrt()-ის გამოყენებით.


let num3 = parseFloat(prompt("enter number for root"))
console.log(Math.sqrt(num3))


// 8)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე მისი ხარისხი (მაგ. კვადრატი ან კუბი) Math.pow()-ის გამოყენებით.

let num4 = parseFloat(prompt("enter number"))
let power = parseFloat(prompt("enyer power"))
console.log(Math.pow(num4, power))

// 9)დააგენერირე 5 შემთხვევითი მთელი რიცხვი 1-დან 100-მდე და იპოვე ამ რიცხვებიდან
// მინიმალური და მაქსიმალური მნიშვნელობა Math.random(), Math.floor(), Math.min() და Math.max()-ის გამოყენებით.



// 10)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე:

// მისი კვადრატი (Math.pow()),

// ფესვი (Math.sqrt()),

// დამრგვალებული მნიშვნელობა (Math.round()).
// ყველა შედეგი ცალ-ცალკე გამოიტანე console.log()-ით.


let num5 = parseFloat(prompt("enter number"))
console.log(Math.pow(num5, 2))
console.log(Math.sqrt(num5))
console.log(Math.round(num5))

// 11)შექმენი პატარა “მათემატიკური თამაში”:
// დააგენერირე შემთხვევითი რიცხვი 1-დან 10-მდე.
// მომხმარებელს შემოატანინე რიცხვი.
// თუ მომხმარებლის რიცხვი დაემთხვა დაგენერირებულს — გამოიტანე "სწორია!",
// სხვა შემთხვევაში "ცდები!".

