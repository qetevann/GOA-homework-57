




// 6)მომხმარებელს შემოატანინეთ რაიმე რიცხვი,გადააქციეთ მომხმარებლის შემოტანილი მნიშვნელობა number ად 
// (იმიტომ რომ მომხმარებელს რომ შემოყავს რაიმე მნიშვნელობა მისი თავდაპირველი ტიპი არის string)
// შემდეგ შეამოწმეთ, თუ მომხმარებლის შემოტანილი რიცხვი არის მეტი 50 ზე და არის ლუწი 
// დაუკონსოლლოგეთ --> "more than 50 and Even", 
// ასევე შეამოწმეთ თუ რიცხვი ნაკლებია 50 ზე და მეტია 0 ზე და ასევე არის კენტი 
// დაუკონსოლლოგეთ --> "This number is less than 50 and more than 0 and is also Odd" , 
// სხვა შემთხვევაში დაუკონსოლლოგეთ ---> "this number is negative"


let c = prompt(Number('enter number: '))
if(c > 50 && c % 2 === 0){
    console.log("more than 50 and even")
}else if(c > 0 && c < 50 && c % 2 === 1){
    console.log("this number is less than 50 and more than 0 and is also odd")
}else{
    console.log("this number is negative")
}