

//1)შექმენი ობიექტი person, რომელსაც ექნება ველები: name, age, city.
// კონსოლში გამოიტანე მხოლოდ name და city.

const person = {
  name: 'qeta',
  age: 17,
  city: 'tbilisi'
}

console.log(person.name)
console.log(person.city)



//2)შექმენი ობიექტი book რომელსაც ექნება key ები: title, author, pages.
// გამოიტანე მხოლოდ author-ის მნიშვნელობა.

const book = {
  title: 'bookname',
  author: 'authorname',
  pages: 300
}

console.log(book.author)



//3)შექმენი ობიექტი student, რომელსაც ექნება key ები: firstName, lastName, grade, age.
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value.


const student = {
  firstName: 'name',
  lastName: 'lastname',
  grade: 12,
  age: 17
}

console.log(Object.values(student))



//4)შექმენი ობიექტი book ველებით: title, author, pages.
// Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key.
// ასევე
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value.


const book2 = {
  title: 'title2',
  author: 'name2',
  pages: 300
}

console.log(Object.keys(book2))   
console.log(Object.values(book2))




//6)შექმენი ობიექტი student = {name: "Gio", age: 16, grade: "A"}
// წაშალე age და grade ფროფერთიები


const student0 = {
  name: 'gio',
  age: 16,
  grade: 'a'
}

delete student.age
delete student.grade
console.log(student0)






//7)შექმენი ობიექტი car = {brand: "Toyota", model: "Camry", year: 2020}
// წაშალე model და დაბეჭდე კონსოლში მხოლოდ დარჩენილი ობიექტი(რომ დაწრუნდე მართლა ამოიშალა თუარა)

const car = {
  brand: 'toyota',
  model: 'camry',
  year: 2020
}

delete car.model
console.log(car)



//8)შექმენი ობიექტი book = {title: "1984", author: "Orwell", pages: 328}
// წაშალე pages  და კონსოლში დაბეჭდე ის  ქიები რომლებიც დარჩა ობიექტში.


const book3 = {
  title: 1984,
  author: 'orwell',
  pages: 328
}

delete book.pages
console.log(Object.keys(book3))


//9)შექმენი ობიექტი person = {name: "Ana", age: 20}
// დაამატე ახალი key 
// სახელად city მნიშვნელობით "Tbilisi".
// ასევე დაამატე height მნიშვნელობით --> 1.90


const person3 = {
  name: 'ana',
  age: 20
}

person.city = 'tbilisi'
person.height = 1.90
console.log(person)



