

// 1)კომენტარის სახით ახსენით თუ რა არის block scope 

// block scope გარკვეული არეალია, სადაც მუშაობს კონკრეტული ფუნქცია / ბლოკის შიგნით




// 2)კომენტარის სახით ახსენით თუ რა არის global scope

// global scope გლობალური არეალია, სადაც ნებისმიერი ფუნქცია მოქმედებს ნებისმიერ ადგილას 




// 3)კომენტარის სახით ახსენით თუ რა არის local variables და როგორი ცვლადები არიან ისინი

// local variables ცვლადებია, რომელიც ხელმისაწვდომია მხოლოდ კონკრეტულ scope - ში (block scope)




//4)კომენტარის სახით ახსენით თუ რა არის global variables და როგორი ცვლადები არიან ისინი

// global variables ცვლადებია, რომელიც ხელმისაწვდომია გლობალ სკოუპის ნებისმიერ არეალში




// 5)კომენტარის სახით ახსენით თუ რა არის namespace]




// 6)კომენტარის სახით ახსენით თ რა არის scope pollution

// scope pollution მრავალჯერ გამოყენებული ერთი და იგივე ცვლადის სახელია კონკრეტულ scope- ში


// 7)დაწერე კოდი, სადაც არის:

// ერთი global ცვლადი

// ორი block scope ცვლადი (ერთი if ბლოკში და მეორე for ციკლში)

// შენი დავალებაა

// console.log–ით გამოიტანე ყველა ცვლადი ბლოკის გარეთ და ნახე შედეგი

let global = "global varianle"


    if (true){
        let global2 = "this global var is in if block"
    }

    for (let i = 0; i < 1; i++){
        let global3 = "this global vat is in for loop"
    }

    console.log(global)
    console.log(global2)
    console.log(global3)



// 8)ამას შემდეგზე ავსნით მაგრამ შეამოწმეთ ==>

// if (true) {
//   var a = 5;
//   let b = 10;
// }
// console.log(a);
// console.log(b);

// ნახეთ:

// რომელი და რატომ დაბეჭდავს?

// რომელი არ დაიბეჭდება?



// 9)let y = 5;

// {
//   let y = 15;
//   console.log(y);
// }

// console.log(y);

// რატომ არის პირველ და მეორე console.log-ის შედეგი განსხვავებული?





// 10)let z = 1;

// function test() {
//   let z = 2;
//   console.log(z);
// }

// test();
// console.log(z);

// რატომ განსხვავდება შედეგი?




// 11)დაწერე:

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log(i);

// console.log(i) ციკლიდან გარეთ რა შედეგს იძლევა და რატომ?






// 12)let name = "Goga";

// function changeName() {
//   name = "Nika";
// }

// changeName();
// console.log(name);

// რა გამოვა და რატომ?







// 13)დაწერე კოდი, სადაც:

// global ცვლადი x = 10

// for ციკლში შექმენი let x = 0 და დააბეჭდე

// ციკლიდან გარეთ დააბეჭდე global x

let x = 10

for (let x = 0; x < 1; x++){
    console.log(x)
}

console.log(x)



// 14)დაწერე კოდი, სადაც:

// შექმენი global ცვლადი name

// if ბლოკში შექმენი ცვლადი name და დააწერე სხვა მნიშვნელობა

// დააბეჭდე name ბლოკის გარეთ



let name = "name1"

if (true){
    let name = "name2"
}

console.log(name)


