
// 1)კომენტარის სახით ახსენით და განმარტეთ რა არის DOM და რაში გვეხმარება იგი

// dom - document object model - საიტის სტრუქტურა

// 2)კომენტარის სახით ახსენით თუ რას გვიბრუნებს getElementByTagName("")

// 3)შექმენით 5 სათაური,შენი დავალებაა რომ ეს 5 სათაური წამოიღო ჯს ში tagName ის გამოყენებით და შეინახო ცვლადში,შემდეგ შენი დავალებაა რომ innerHTNL ის გამოყენებით შეცვალალო ყველა სათაურის შიგთავსი(ტექსტი) ცალ ცალკე(ინდექსების გამოყენებით რითიც თქვენ გინდათ, ამის შემდეგ როცა შეცვლით 5 ივე ს კონტენტს გამოიტანეთ 5 ივე სათაურის შიგთავსი კონსოლში გამოიყენეთ  innerHTML

// 4)გვერდზე გქონდეს სამი <p> ტეგი.
// JS-ით getElementsByTagName("p") გამოიტანე პირველი <p> და
// მისი textContent-ი შეცვალე --> "khachapuri" ით .გამოიყენე textCXontent

// 5)გვერდზე იყოს 5 <li>.
// მიწვდი მესამე li ს
// და textContent გააკეთე ცარიელი სტრინგი ანუ ამოშალე მასში მყოფი ტექსტი:

// 6)გვერდზე იყოს ორი <p>.
// JS-ით გაცვალე ერთმანეთის textContent-ები
// (პირველის ტექსტი გახდეს მეორის და პირიქით).

// 7)შექმენი 6 ცალი პარაგრაფი,წამოიღე ყველა პარაგრაფი tagName ის გამოყენებით და შეინახე ცვალადში,შემდეგ დააკონსოლლოგე იმ სიის სიგრძე რომელშიც ინახავ ყველა პარაგრაფს////ასევე ამ სიას გადაუარე for ციკლით და გამოიტანე თითოეული ელემენტის textContent ცალ ცალკე

// 8)შექმენი 5 ცალი i თეგი და მოათავსე რაიმე ტექსტი შიგნით,შენი დავცალებაა რომ წამოიღო ყველა i თეგი და შეინახო ცვლადში,შენი დავალებააა რომ ყველა i თეგში მყოფი ტექსტი textContent ის გამოყენებით შეცვალო --> "viri" ით /გამოიყენე while loop/for loop ორივე

// 9)დააგენერირე რენდომ მთელი რიცხვები 50 დან 100 ჩათვლით/////1 დან 10 ჩათვლით /// 5 დან 25 მდე///



//1

// DOM (Document Object Model) არის HTML გვერდის სტრუქტურის
// წარმოდგენა ობიექტების "ხის" (tree) სახით. ბრაუზერი, როცა
// HTML-ს კითხულობს, ამ ხეს აგებს — ყოველი თეგი (div, p, h1 და
// ა.შ.) ხდება ცალკე "კვანძი" (node/ obiekti). DOM გვაძლევს
// საშუალებას JavaScript-იდან მივწვდეთ, წავიკითხოთ და შევცვალოთ
// გვერდზე არსებული ელემენტები, მათი ტექსტი, სტილი, ატრიბუტები —
// ანუ გვერდი "ცოცხალი" (დინამიური) გავხადოთ, ხელახლა ჩატვირთვის
// გარეშე.


// 2) რას გვიბრუნებს getElementsByTagName("")

// getElementsByTagName("tagName") გვიბრუნებს "HTMLCollection"-ს —
// ანუ ყველა იმ ელემენტის სიის მსგავს კრებულს, რომელსაც მოცემული
// ტეგის სახელი აქვს (მაგ. ყველა <p>, ან ყველა <li>). ეს კრებული
// "live" არის — თუ გვერდზე მოგვიანებით დაემატება/წაიშლება იგივე
// ტეგის ელემენტი, კრებული ავტომატურად განახლდება. მასზე წვდომა
// ხდება ინდექსით, ისევე როგორც ჩვეულებრივ სიაზე: collection[0].


// 3) 5 სათაურის წამოღება tagName-ით და თითოეულის შიგთავსის შეცვლა

const headings = document.getElementById("task3").getElementsByTagName("h2");

headings[0].innerHTML = "პირველი განახლებული სათაური";
headings[1].innerHTML = "მეორე განახლებული სათაური";
headings[2].innerHTML = "მესამე განახლებული სათაური";
headings[3].innerHTML = "მეოთხე განახლებული სათაური";
headings[4].innerHTML = "მეხუთე განახლებული სათაური";

console.log(headings[0].innerHTML);
console.log(headings[1].innerHTML);
console.log(headings[2].innerHTML);
console.log(headings[3].innerHTML);
console.log(headings[4].innerHTML);


// 4) პირველი <p>-ის textContent-ის შეცვლა

const task4Paragraphs = document.getElementById("task4").getElementsByTagName("p");
task4Paragraphs[0].textContent = "khachapuri";


// 5) მესამე <li>-ის textContent-ის დაცარიელება

const listItems = document.getElementById("task5").getElementsByTagName("li");
listItems[2].textContent = "";


// 6) ორი <p>-ის textContent-ების გაცვლა

const task6Paragraphs = document.getElementById("task6").getElementsByTagName("p");

const tempText = task6Paragraphs[0].textContent;
task6Paragraphs[0].textContent = task6Paragraphs[1].textContent;
task6Paragraphs[1].textContent = tempText;


// 7) 6 პარაგრაფის წამოღება, სიგრძის დაბეჭდვა, for-ით ტექსტების ცალ-ცალკე დაბეჭდვა

const task7Paragraphs = document.getElementById("task7").getElementsByTagName("p");

console.log(task7Paragraphs.length);

for (let i = 0; i < task7Paragraphs.length; i++) {
    console.log(task7Paragraphs[i].textContent);
}


// 8) 5 <i> თეგის ტექსტის შეცვლა "viri"-თი — for loop და while loop

const italicTags = document.getElementById("task8").getElementsByTagName("i");

// პირველი ორი ელემენტი შევცვალოთ for loop-ით
for (let i = 0; i < 2; i++) {
    italicTags[i].textContent = "viri";
}

// დარჩენილი ელემენტები შევცვალოთ while loop-ით
let j = 2;
while (j < italicTags.length) {
    italicTags[j].textContent = "viri";
    j++;
}


// 9) რენდომ მთელი რიცხვების გენერაცია სხვადასხვა დიაპაზონში

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(50, 100));  
console.log(getRandomInt(1, 10));    
console.log(getRandomInt(5, 25));    


