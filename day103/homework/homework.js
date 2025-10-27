// 1) შექმენი ფუნქცია sumArray(arr), რომელიც მიიღებს რიცხვების სიას პარამეტრად და დააბრუნებს სიაში მყოფი რიცხვების  ჯამს
function sumArray(arr){
  let sum = 0
  for(let i = 0;i < arr.length;i++){
    sum += arr[i]
  }
  return sum
}

// 2)დაწერე ფუნქცია countEvenOdd(arr), რომელიც მიიღებს რიცხვების სიას და დაბეჭდავს რამდენია ლუწი და რამდენი კენტი.
function countEvenOdd(arr){
  let evenCount = 0
  let oddCount = 0
  for(let i = 0;i < arr.length;i++){
    if(arr[i] % 2 === 0){
      evenCount++
    } else {
      oddCount++
    }
  }
  console.log("even count:", evenCount)
  console.log("odd count:", oddCount)
}

// 3)შექმენი ფუნქცია findMax(arr) – მიიღოს სია და დააბრუნოს უდიდესი რიცხვი. (შეგიძლიათ მოიძიოთ და გააკეთოთ, საჭროა ლოგიკის დაწერა რომ ეს დავალება შეასრულოთ)

function findMax(arr){
  let max = arr[0]
  for(let i = 1;i < arr.length;i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max
}

// 4)შექმენი ფუქნცია findMin(arr) – მიიღოს სია და დააბრუნოს ყველაზე პატარა რიცხვი. (შეგიძლიათ მოიძიოთ და გააკეთოთ, საჭროა ლოგიკის დაწერა რომ ეს დავალება შეასრულოთ)

function findMin(arr){
  let min = arr[0]
  for(let i = 1;i < arr.length;i++){
    if(arr[i] < min){
      min = arr[i]
    }
  }
  return min
}

// 5) შექმენით ფუნქცია average(arr) – მიიღოს რიცხვების სია და დააბრუნოს მათი საშუალო (ჯამი / რაოდენობა)
function average(arr){
  let sum = 0
  for(let i = 0;i < arr.length;i++){
    sum += arr[i]
  }
  return sum / arr.length
}

// 6) შექმენით ფუნქცია რომელსაც გადასცემთ არგუმენტად სიას 6)შექმენით ფუნქცია რომელსაც გადასცემთ არგუმენტად სიას --> ["გიორგი" , 14 , "საბა" , 90.5 , "ირაკლი" , true]

// ----შენი დავალებაა რომ ამ სიაში მყოფი მესამე ინდექსზე მდგომი ელემენტი შეცვალო --> 10.89 ით

// ----შენი დავალებაა რომ ამ სიაში მყოფი მეხუთე ინდექსზე მდგომი ელემენტი შეცვალო ---> false ით

// ---შენი დავალებაა რომ ამ სიაში მყოფი პირველ ინდექსზე მდგომი ელემენტი შეცვალო ---> "ირაკლი" ით

// --- ამ ყველა ელემენტის შეცვლის შემდეგ დააკონსოლლოგეთ საბოლოო სია 

function modifyArray(arr){
  arr[3] = 10.89
  arr[5] = false
  arr[1] = "ირაკლი"
  console.log(arr)
}

// 7) შექმენი ფუნქცია რომელსაც არგუმენტად გადაეცემა სია,გამოიტანო თითეული ელემენტი ცალ ცალკე, გამოიყენე for loop/while loop
function printElements(arr){
  for(let i = 0;i < arr.length;i++){
    console.log(arr[i])
  }
}


// 8)შექმენი ფუქნცია რომელსაც გადაეცემა არგუმენტად სია,
// სადაც მოთავსებული იქნება განსხვავებული მონაცემთა ტიპის ელემენტები,შენი დავალეაბა რომ --> 
// დაითვალო ამ სიაში სტრინგ ტიპის მონაცემების რაოდენობა და ინტეჯერ ტიპის მონაცემების ჯამი, 
// ანუ სიაში უდნა დათვალო რამდენი სტრინგია,და ინტეჯერის შემთხვევაში უნდა გაიგო სიაში მყოფი
//  ინტეჯერების(ნამბერების) ჯამი
function countStringsSumNumbers(arr){
  let stringCount = 0
  let numberSum = 0
  for(let i = 0;i < arr.length;i++){
    if(typeof arr[i] === "string"){
      stringCount++
    } else if(typeof arr[i] === "number"){
      numberSum += arr[i]
    }
  }
  console.log("string count:", stringCount)
  console.log("sum of numbers:", numberSum)
}

// 9)შექმენი ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია,
// შენი დავალებაა რომ გაიგო ამ სიაში მყოფი ლუწი რიცხვების რაოდენობა და კენტი რიცხვების ჯამი
function evenCountOddSum(arr){
  let evenCount = 0
  let oddSum = 0
  for(let i = 0;i < arr.length;i++){
    if(arr[i] % 2 === 0){
      evenCount++
    } else {
      oddSum += arr[i]
    }
  }
  console.log("even count:", evenCount)
  console.log("odd sum:", oddSum)
}

// 10)შექმენი ფუნქცია რომელსაც გადაეცემა სტრინგები და ინტეჯერები,შენი დავალებაა 
// რომ თუ სიაში მყოფი რომელიმე ელემენტი არის სტრინგ ტიპის,ასეთი ელემენტი ჩაანაცვლო true - ით
function replaceStringsWithTrue(arr){
  for(let i = 0;i < arr.length;i++){
    if(typeof arr[i] === "string"){
      arr[i] = true
    }
  }
  console.log(arr)
}
