

//1)ფუნქციამ მიიღოს ორი რიცხვი (start, end) და while loop–ით გადაუაროს ამ დიაპაზონს.

// თითო რიცხვისთვის შეამოწმეთ if else-ით:

// თუ ლუწია → დაბეჭდოს "ლუწია"

// თუ კენტია → "კენტია". გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი



function check(start, end){
  while (start <= end){
    if (start % 2 === 0){
      console.log(start + "is even")
    } else{
      console.log(start + "is odd")
    }
    start++
  }
}
check(3, 10)



//2)ფუნქციამ მიიღოს სამი რიცხვი (a, b, c) და if else-ებით განსაზღვროს რომელი არის ყველაზე დიდი.

// დააბრუნოს შედეგი.

function largest(a, b, c){
  if (a > b && a > c){
    console.log(a + " is the largest")
  } else if (b > a && b > c){
    console.log(b + " is the largest")
  } else if (c > a && c > b){
    console.log(c + "is the largest")
  }
}


largest(12, 7, 12);



// 3)ფუნქციამ მიიღოს პაროლი (პარამეტრი).

// while loop-ში მომხმარებელს (prompt) მოსთხოვოს პაროლი.

// სანამ შეყვანილი პაროლი არ დაემთხვევა სწორ პარამეტრს, მოსთხოვე თავიდან.

// თუ დაემთხვა → "წარმატებით!".


function passw(password){
  let p = prompt("enter password:")

  while (p !== password){
    p = prompt("incorrect, pease try again.")
  }

  console.log("success.")
}

passw("1234")



// 4)ფუნქციამ მიიღოს სამი ქულა(პარამეტრი) ---> (p1, p2, p3).

// შეკრიბეთ ეს ქულები.

// იპოვოს საშუალო და შეინახხეთ ცვლადში

// შემდეგ --> if else ით შეამოწმეთ

// თუ  საშუალო ≥ 51 → "დადებითი შედეგი".

// სხვა შემთხვევაში → "უარყოფითი შედეგი".


function points(p1, p2, p3){
    let sum = p1 + p2 + p3
    let average = sum / 3
    if (average >= 51){
        console.log('positive')
    }else 
        console.log ('negative')
}


// 5)ფუნქციამ მიიღოს სამი  რიცხვი (პარამეტრი) , შენი დავალებაა რომ იპოვო ამ სამი რიცხვის ნამრავლი 

// გამოიძახე ფუნქცია 5 ჯერ და არგუმენტად გადაეცი სხვადასხვა მნიშვნელობები


function mult(a, b, c){
  let result = a * b * c
}

mult(2, 3, 4)
mult(5, 1, 6)
mult(10, 2, 3)
mult(7, 8, 2)
mult(4, 4, 4)




// 6)ფუნქციამ მიიღოს ორი რიცხვი (start, end).

// for loop-ით შეკრიბოს ყველა რიცხვი ამ დიაპაზონში.

// თუ ჯამი > 100 → "დიდი ჯამი"

// სხვაგვარად → "პატარა ჯამი".


function sums(start, end){
  let sum = 0

  for (let i = start; i <= end; i++){
    sum += i
  }

  if (sum > 100){
    console.log("large sum")
  } else {
    console.log("small sum")
  }
}

sums(1, 20)


// 7)ფუნქციამ მიიღოს ორი რიცხვი (start, end) და for loop-ით შეაჯამოს მხოლოდ კენტი რიცხვები.

// თუ ჯამი > 50 → "დიდი ჯამი"

// სხვაგვარად → "პატარა ჯამი".


function sums2(start, end) {
  let sum = 0

  for (let i = start; i <= end; i++){
    if (i % 2 !== 0){
      sum += i
    }
  }

  if (sum > 50){
    console.log("large sum")
  } else {
    console.log("small sum")
  }
}

sumOdd(1, 20)



// 8)ფუნქციამ მიიღოს რიცხვი(პარამეტრი) , while loop ის გამოყენებით
//  შენი დავა;ებაა 1 დან პარამეტრშ გადაცემულ რიცხვამდე დაითვალო ყველა კენტი რიცხვის და ასევე ყველა ლუწი რიცხვის რაოდენობა 
// ცალ ცალკე,გამოიძახე ფუნქცია რამდენჯერმე გადაეცი განსხვავებული მნიშვნელობები


function countEvenOdd(n){
  let evenCount = 0
  let oddCount = 0
  let i = 1

  while(i <= n){
    if(i % 2 === 0){
      evenCount++
    } else {
      oddCount++
    }
    i++
  }

  console.log("even count:", evenCount)
  console.log("odd count:", oddCount)
}

countEvenOdd(10)
countEvenOdd(15)
countEvenOdd(20)
countEvenOdd(7)
countEvenOdd(1)



