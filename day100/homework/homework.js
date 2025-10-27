


// 1)დავალება 1 – ლუწი/კენტი მთვლელი

// მომხმარებელს prompt–ით შეეკითხე ორი რიცხვი: start და end.

// გამოიყენე for ციკლი, რომ გაიარო ყველა რიცხვი start-იდან end-მდე.

// დაითვალე ცალ–ცალკე რამდენია ლუწი და რამდენია კენტი.

// ბოლოს დაბეჭდე: "ლუწების რაოდენობა: X, კენტების რაოდენობა: Y".


let start = Number(prompt('enter start number:'))
let end = Number(prompt('enter end number'))

let even = 0
let odd = 0

for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        even++
    } else {
        odd++
    }
}

console.log('even: ' + even )
console.log('odd: ' + odd)





// 2)მომხამრებელს შემოატანინე ორი რიცხვი start და end ი ,
// შემდეგ დაატიალეთ ფორ ციკლი start იდან end ის ჩათცლით და ამ გაიგე ამ რიცხვების ჯამი,
// შეინახე ეს ჯამი ცვლადში და შემდეგ გამოთვალეთ საშაუალო არითმეტიკული და გამოიტანეთ კონსოლში






// 3)მომხმარებელს prompt–ით შეეკითხე რიცხვი.

// თუ რიცხვი > 0 → დაბეჭდე "დადებითია".

// თუ რიცხვი < 0 → დაბეჭდე "უარყოფითია".

// თუ 0 → დაბეჭდე "ნულია".


let num1 = Number(prompt('enter any number: '))

if (num1 > 0 ){
    console.log('positive')
}else if (num1 < 0){
    console.log ('negative')
}else{
    console.log('equals to zero')
}



// 4)მომხმარებელს შეეკითხე ქულა (0–100).

// თუ ქულა < 50 → "ჩაიჭერი".

// თუ 50–69 → "საშუალო".

// თუ 70–89 → "კარგი".

// თუ 90–100 → "ძალიან კარგი".

// თუ სხვა რიცხვი შეიყვანა → "არასწორი მონაცემი".



let grade = Number(prompt('emter your garde:'))

if (grade < 50){
    console.og ('you have failed')
}else if ( garde >= 50 && grade < 69){
    console.log('average')
}else if (grade >= 70 && grade < 89){
    console.log ('good')
}else if (grade >= 90 && grade === 100){
    console.log ('great')
}else{
    console.log ('invalid info')
}






// 5)prompt–ით მომხმარებელს შეეკითხე სამი რიცხვი.

// გამოიყენე if/else რომ იპოვო:

// ყველაზე დიდი რიცხვი

// ყველაზე პატარა რიცხვი

// შემდეგ შეამოწმე:

// თუ ყველაზე დიდი რიცხვი ლუწია → დაბეჭდე "ყველაზე დიდი რიცხვი ლუწია"

// თუ კენტია → "ყველაზე დიდი რიცხვი კენტია"



let numb1= Number(prompt("enter first number:"))
let numb2 = Number(prompt("enter second number:"))
let numb3 = Number(prompt("enter third number:"))

let biggest
let smallest
if (numb1 >= numb2 && numb1 >= numb3){
    biggest = numb1
} else if (numb2 >= numb1 && numb2 >= numb3){
    biggest = numb2
} else {
    biggest = numb3
}


if (numb1 <= numb2 && numb1 <= numb3){
    smallest = numb1
} else if (numb2 <= numb1 && numb2 <= numb3){
    smallest = numb2
} else{
    smallest = numb3
}

console.log("the biggest: " + biggest)
console.log("the smallest: " + smallest)

if (biggest % 2 === 0) {
    console.log("the biggest number is odd")
} else {
    console.log("the biggest number is even")
}




