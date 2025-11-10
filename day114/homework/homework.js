// 1)შექმენი ობიექტი person, რომელსაც ექნება შემდეგი ველები: "first name", "last name", "age".
// კონსოლში გამოიტანე "first name" და "age".


let person1 = {
  firstname: 'name1',
  lastname: 'lastname1',
  age: 25
}
console.log(person1[firstname])
console.log(person1.age)

// 2)შექმენი ობიექტი car, რომელსაც ექნება "car brand", "model name" და "year".
// კონსოლში გამოიტანე "car brand" და "model name" მნიშვნელობები.


let car = {
  "car brand": 'dodge',
  "model name": 'challenger',
  "year": 2023
}
console.log(car["car brand"])
console.log(car["model name"])

// 3)შექმენი ობიექტი book, რომელსაც ექნება "book title", "author name" და "page count".
// კონსოლში გამოიტანე "book title" და "author name".

let book = {
  "book title": "title1",
  "author name": "author1",
  "page count": 300
}
console.log(book["book title"])
console.log(book["author name"])

// 4)შექმენი ობიექტი student, რომელსაც ექნება "full name", "grade level" და "favorite subject".
// კონსოლში გამოიტანე "favorite subject" მნიშვნელობა.

let student1 = {
  "full name": "name2",
  "grade level": 10,
  "favorite subject": "math"
}
console.log(student1["favorite subject"])

// 5)შექმენი ობიექტი movie, რომელსაც ექნება "name, "release year" და "main actor".
// კონსოლში გამოიტანე name და "main actor" მნიშვნელობები.

let movie = {
  name: "title2",
  "release year": 2000,
  "main actor": "mainactor1"
}
console.log(movie.name)
console.log(movie["main actor"])

// 6)შექმენი ობიექტი person, რომელსაც ექნება "name", "age" და "city".
// for...in ციკლით გამოიტანე თითოეული key და მისი value.



// 7)შექმენი ობიექტი car, რომელსაც ექნება "brand", "model" და "year".
// for...in ციკლით კონსოლში დაწერე:
// 👉 "brand: BMW" — მსგავსი ფორმატით (ანუ key: value). გამოიყენეთ სტრინგ ფორმატი(f string) რომ ვიყენებდით ხოლმე პითონში ეგრე რესურსებში ჩაგდებულია ბოლოს და შეამოწმეთ




// 8)შექმენი ობიექტი student, რომელსაც ექნება "age", "grade", "height", "score" ყველა მათგანს ვალუებად მიანიჭეთ მხოლოდ ნამბერ ტიპის მონაცემები.
// for...in ციკლით გადაუარე ამ ობიექტს და კონსოლში გამოიტანე მხოლოდ ის ვალუები რომელიც მეტია 50 ზე 



// 8)შექმენი ობიექტი movie, რომელსაც ექნება "title", "genre", "rating", "year" და ყველას მიანიჭეთ სტრინგ ტიპის მონაცემი.
// for...in ციკლით გადაუარეთ ობიექტს და გამოიტანეთ მხოლოდ ის სტრინგები რომელთა სიგრძე ნაკლებია 4 ზე



// 9)შექმენი ობიექტი fruit, რომელსაც ექნება "name", "color", "taste", "size".
// ყველას მიანიჭე სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც იწყება ასო "a"-ზე.



// 10)შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName", "class", "id".
// ყველა იყოს სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომელთა სიგრძე ტოლია 3-ის.






// 11)შექმენი ობიექტი book, რომელსაც ექნება "title", "author", "genre", "lang".
// ყველა მიანიჭე სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც შეიცავენ ასო "o"-ს.


// 12)შექმენი ობიექტი person, რომელსაც ექნება "name" და "age".
// ობიექტში დაამატე ფუნქცია სახელად showInfo, რომელიც კონსოლში გამოიტანს:`ჩემი სახელია ... და მე ვარ ... წლის ,გამოიყენე this keyword ი` ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი



let person3 = {
  name: 'name5',
  age: 17,
  a:function showInfo() {
    console.log(`ჩემი სახელია ${this.name} და მე ვარ ${this.age} წლის`)
  }
}
person3.showInfo()



// 13)შექმენი ობიექტი car, რომელსაც ექნება "brand" და "model".
// ობიექტში დაამატე ფუნქცია სახელად fullName, რომელიც დააბრუნებს შემდეგნაირ ტიპის ტექსტს ---> `მე მყავს ... რომლის მოდელიც არის ...` ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი



let car3 = {
  brand: 'dodge',
  model: 'challenger',
  c: function fullName() {
    return `მე მყავს ${this.brand} რომლის მოდელიც არის ${this.model}`
  }
}
console.log(car3.c())


// 14)შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName" და ფუნქცია სახელად getFullName(),
// რომელიც დააბრუნებს შემდეგნაირ ტექსტს --> `ჩემი სახელია ... და ჩემი გვარია ...` ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

let student4 = {
  firstName: 'name6',
  lastName: 'lastname2',
  q:function getFullName() {
    return `ჩემი სახელია ${this.firstName} და ჩემი გვარია ${this.lastName}`
  }
}
console.log(student4.getFullName())

// 15)შექმენი ობიექტი book, რომელსაც ექნება "title" და "author".ობიექტში დაამატე ფუნქცია სახელად info(),რომელიც დაარეთურნებს შემდეგ ტექსტს --> `ამ წიგნის ავტორი არის ... და ამ წიგნს ქვია ...`  ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

// let book3 = {
//   title: 'title3',
//   author: 'author3',
//   function info() {
//     return `ამ წიგნის ავტორი არის ${this.author} და ამ წიგნს ქვია ${this.title}`
//   }
// }
// console.log(book3.info())

