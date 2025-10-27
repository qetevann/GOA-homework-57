

// 1)მომხმარებელს შემოატანინე რაიმე რიცხვი,1 დან მომხმარებლის შემოტანილ რიცხვამდე დათვალე თუ რამდენი ლუწი და რამდენი კენტი რიცხვია


let num1 = Number(prompt("enter number:"))

let even = 0
let odd = 0

for (let i = 1; i <= num1; i++){
    if (i % 2 === 0){
        even++
    } else{
        odd++
    }
}

console.log("even numbers: " + even)
console.log("odd numbers: " + odd)




// 2)მომხმარებელს შემოატანინე ორი რიცხვი,მომხმარებლის მიერ შემოტანილი პირველი რიცხვიდან მეორე რიცხვამდე იპოვეთ ყველა ლუწი რიცხვის ჯამი


let start = Number(prompt("enter first number:"))
let end = Number(prompt("enter second number:"))

let sumEven = 0

for (let i = start; i <= end; i++){
    if (i % 2 === 0){
        sumEven += i
    }
}

console.log("sum of even numbers: " + sumEven)



// 3)მომხმარებელს შემოატანინეთ რაიმე რიცხვი,სანამ მომხმარებელი არ შემოიტანს 0 იანს იქამდე გაუმეორეთ რომ თავიდან შემოიტანოს რიცხვი


let num

do {
    num = Number(prompt("enter number (enter 0 to stop):"))
} while (num !== 0)

alert("you entered 0. program ended!")



// 4)მომხმარებელს შემოატანინეთ სტრინგი,სანამ მომხმარებელი არ შემოიტანს თქვენს სახელს იქამდე გაუმეორეთ 
// რომ თავიდან შემოიყვანოს სახელი,ასევე დაითვალეთ ცდების რაოდენობა თუ რამდენჯერ სცადა მომხმარებელმა შემოტანა,
// ამისთვის დაგჭრდებათ თავიდან შექმნათ ცვლადი და გაუტოლოთ 0 ს,და ყოველ ჯერზე როცა მომხმარებელი შეიყვანს არასწორ ინფოს განაახლოთ ამ ცვლადის მნიშვნელობა,
// ბოლოს როცა გაარტყავს და შემოიყვანს თქვენს სახელს დაუკონსოლლოგეთ --> "you guessed my name and your attempts is : ...


let name = "qeta"
let user
let attempts = 0

do {
    user = prompt("enter my name:")
    attempts++
} while (user !== name)

console.log("you guessed my name and your attempts is: " + attempts)



// 5)შექმენი ცვლადი სადაც მომხმარებელს შემოატანინებ სტრინგს(პაროლს),
// ასევე შექმენი ცვლადი სადაც შეინახავ პაროლს,შემდეგ შეამოწმე,თუ მომხმარებლის შემოტანილი პაროლი არის იგივე პაროლი რაც შენ შეინახე ცვლადში,
// დაუპრინტე --> "you guessed" , სხვა შემთხვევაში დაგჭირდებათ ვაილ ლუპი რომელიც გააკეთებს შემოდეგ მოქმედებას -->
//  სანამ მომხმარებლის პაროლი არ იქნება თქვენს მიერ შენახული პაროლისა,იქამდე გაუმეორეთ რომ თავიდან შემოიყვანოს მომხმარებელმა პაროლი,თუ პაროლი გაარტყა მაშინ აქაც დაუკონსოლლოგეთ -->
//  "you guessed"



let password = "240308"
let userpass= prompt("Enter the password:")
while (userpass!== password){
    userpass= prompt("wrong password! try again:")
}

console.log("you guessed")




//6)მომხმარებელს შემოატანინე რიცხვი,სანამ მომხმარებელი არ შემოიტანს 0 იანს იქამდე  შეამოწმეთ -->
// თუ მომხმარებლის შემოტანილი რიცხვი არის უარყოფითი დაუკონსოლლოგეთ --> "negative number" , 
// თუ მომხმარებელმა შემოიტანა დადებითი რიცხვი დაუკონსოლლოგეთ --> "You entered posotive number" ,
// ამის შემდეგ კი თავიდან მოსთხოვეთ რომ შშემოიტანოს რიცხვი მომხმარებელმა,თუ შემოიტანა მომხმარებელმა 0
//  ეს იმას ნიშნავს რომ ვაილ ლუპი არ იმუშავებს და ქვემოთ მის გარეთ დაუკონსოლლოგეთ -- > "you guessed the number,the loop is over" 


let numb = Number(prompt("enter a number (enter 0 to stop):"))

while (numb !== 0){
    if (numb < 0){
        console.log("negative number")
    } else{
        console.log("you entered positive number")
    }

    numb = Number(prompt("enter a number (enter 0 to stop):"))
}

console.log("you guessed the number, the loop is over")
