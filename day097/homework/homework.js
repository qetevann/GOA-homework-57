
// 1)შექმენით ჯავასკრიპტის ფაილი ,დააკავშირე html ის ფაილთან,
// ჯს ის ფაილში console.log()ის გამოყენებით დაბეჭდეთ 10 ჯერ განსხვავებული ცხოველის სახელი,
// გახსენით კონსოლი და ნახეთ შედეგი

console.log('dzagli')
console.log('kata')
console.log('lomi')
console.log('cxeni')
console.log('cxvari')
console.log('txa')
console.log('zebra')
console.log('datvi')
console.log('kurdgeli')
console.log('gveli')



// 2)კომენტარის სახით ჩამოწერეთ რამდენი გზით შეგვიძლია რომ შევქმნათ ცვვლადები 
// და ჩამოწერე რა განსხვავებაა მათ შორის

// 1. var - ცვლადის მნიშვნელობის შეცვლა შეგძლია, იშვიათად გამოიყენება
// 2. let - ცვლადის მნიშვნელობის შეცვლა შეგიძლია
// 3. const - ცვლადის მნიშვნელობის შეცვლა არ შეგიძლია



// 3)შექმენი 15 ცვლადი და მიანიჭეთ თქვენთვის სასურველი მნიშვნელობები,
// 5 ცვლადი შექმენით პირველი გზით ,5 ცვლადი შექმენით მეორე გზით და 5 შექმენით მესამე გზით,
// ანუ უნდა გამოიყენოთ ცვლადის შექმნის სამივე გზა და მოიყვანოთ ხუთ ხუთი მაგალითი

var first = 1
var second= 2
var third = 3
var fourth = 4
var fifth = 5

let sixth = 6
let seventh = 7
let eighth = 8
let ninth = 9
let tenth = 10

const eleventh = 11
const twelfth = 12
const thirteenth = 13
const fourteenth = 14
const fifteenth = 15



// 3)კომენტარის სახით ჩამოწერეთ თუ რომელი მონაცემთა ტიპები(data type) გვაქვს ჯავასკრიპტში 
// და მოიყვანეთ ყველა მათგანზე მაგალითები

// 1. number არის ორივე, integer და float:
let age = 17
let price = 3.50

// 2. string არის "" ან '' - ში ჩაწერილი ნებისმიერი რამ
let name = "Qetevan"
let lastName = 'Makharashvili'
let full = name + ' ' + lastName

// 3. boolean არის true ან false  შემთხვევები
let num = 5

// true:
console.log(num < 10)

// false:
console.log(num > 10)



// 4)შექმენით 9 ცვლადი let ის გამოყენებით,
// 3 ცვლადში შეინახეთ ...(ნასწავლი 1) ტიპის მონაცემი,
// 3 ცვლადში შეინახეთ  ...(ნასწავლი 2) ტიპის მონაცემი 
// და სამ ცვლადში შეინახეთ ...(ნასწავლი 3) ტიპის მონაცემი.
// consol.log()ის დახმარებით დააკონსოლოგეთ 9 ვე ცვლადი 
// და გამოიტანეთ კონსოლში 9 ვე ცვლადში შენახული მნიშვნელობა:
// მაგ:
// let name = "goga"
// console.log(name) --> გამოგვიტანს კონსოლში name ცვლადში შენახულ მნიშვნელობას ანუ "goga" - ს

let num1 = 1
console.log(num1 - num2 - num3)

let num2 = 2
console.log(num2 + num1 + num3)

let num3 = 3
console.log(num3 / num1 / num2)


let name1 = 'goal'
let name2 = 'oriented'
let name3 = 'academy'
console.log(name1 + ' ' + name2 + ' ' + name3)
console.log(name2 + ' ' + name3 + ' ' + name1)
console.log(name3 + ' ' + name2 + ' ' + name1)


let num4 = 15
let num5 = 20
let num6 = 25
console.log(num4 < num5 < num6)
console.log(num5 > num4 < num6)
console.log(num6 > num5 > num4)



// 5)შექმენი 3 ცვლადი,პირველში შეინახე ...(ნასწავლი 1) ტიპის მოანცემი 
// მეორეში შეინახე ...(ნასწავლი 2) ტიპის მონაცემი და მესამეში შეინახე ...(ნასწავლი 3) ტიპის მონაცემი,
// თქვენი დავალებაა კონსოლში გამოიტანოთ ამ  ცვლადებში შენახული მნიშვნელობების ტიპები 
// hint:გამოიყენეთ typeof ... ფუნქცია


let num7 =  7
console.log(typeof num7)

let word = 'Qeta'
console.log(typeof word)

let num8 = 8
console.log(typeof num8 < num7)



// 6)კომენტარის სახით ჩამოწერეთ რომელი მათემატიკური ოპერატორები გვაქვს javaScript ში
//  და თითეულზე მოიყვანეთ თქვენთვის სასურველი მაგალითები,თითოეულზე 5 მაგალითი

// 1. "-"

console.log(10-1)
console.log(8-6)
console.log(90-10)
console.log(75-88)
console.log(144 - 77)

// 2. "+"

let numb1 = 100
let numb2 = 200
let numb3 = 300
let numb4 = 400
let numb5 = 500
console.log(numb1 + numb2)
console.log(numb5 + numb3)
console.log(numb2 + numb4)
console.log(numb3 + numb3)
console.log(numb5 + numb4)

// 3. "/"

console.log(numb5 / numb1)
console.log(numb3 / numb5)
console.log(numb2 / numb4)
console.log(numb4 / numb2)
console.log(numb3 / numb3)

// 4. "*"

console.log(numb1 * numb2)
console.log(numb2 * numb3)
console.log(numb3 * numb4)
console.log(numb4 * numb5)
console.log(numb5 * numb1)



// 7)შექმენით 5 ცვლადი camelCase ის გამოყენებით 
// და შეინახეთ 5 ივე ცვლადში number ტიპის მონაცემი

let camelCase1 = 11
let camelCase2 = 22
let camelCase3 = 3.3
let camelCase4 = 4.4
let camelCase5 =  5.5



// 8)მომხმარებელს შემოატანინეთ თქვენი სახელი,გვარი,ასაკი,საცხოვრებელი ადგილი,
//  დაბადების თარიღი(წლებში),სიმაღლე ,წონა და შეინახეთ ცვლადებში ,გამოიყენეთ prompt ფუნქცია,

let question1 = prompt("what is your name? ")
let question2 = prompt("what is your lastname? ")
let question3 = prompt("what is your age? ")
let question4 = prompt("where do you live? ")
let question5 = prompt("what is your birthday year? ")
let question6 = prompt("how tall are you? ")
let question7 = prompt("how much do you weigh? ")



// 9)alert() ის გამოყენებით გამოიტანეთ თქვენთვის სასურველი ტექსტი,
// მოიყვანეთ alert() ის 10 მაგალითი

alert('hello. welcome to the website')
alert('this website was made with HTML, CSS and some JS.')
alert('this website does not have interactive')
alert('another random text')
alert('sorry, i ran out of ideas:((')
alert('ihave just started learning javascript')
alert('another random text 2')
alert('im so tired')
alert('ive learned numbers, variable forms, console log function, boolean, prompt and alert')
alert('bye, have a nice day:))')










