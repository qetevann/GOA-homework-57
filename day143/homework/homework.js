


//codeacademy functions




//1

const dayNumber = Number(prompt("შეიყვანეთ რიცხვი (1-7):"));

switch (dayNumber) {
    case 1:
        console.log("ორშაბათი");
        break;
    case 2:
        console.log("სამშაბათი");
        break;
    case 3:
        console.log("ოთხშაბათი");
        break;
    case 4:
        console.log("ხუთშაბათი");
        break;
    case 5:
        console.log("პარასკევი");
        break;
    case 6:
        console.log("შაბათი");
        break;
    case 7:
        console.log("კვირა");
        break;
    default:
        console.log("არასწორი დღე");
}


//2

const monthNumber = Number(prompt("შეიყვანეთ თვის ნომერი (1-12):"));

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log("ზამთარი");
        break;
    case 3:
    case 4:
    case 5:
        console.log("გაზაფხული");
        break;
    case 6:
    case 7:
    case 8:
        console.log("ზაფხული");
        break;
    case 9:
    case 10:
    case 11:
        console.log("შემოდგომა");
        break;
    default:
        console.log("არასწორი თვე");
}


//3

const num1 = Number(prompt("შეიყვანეთ პირველი რიცხვი:"));
const operator = prompt("შეიყვანეთ ოპერატორი (+, -, *, /):");
const num2 = Number(prompt("შეიყვანეთ მეორე რიცხვი:"));

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log("არასწორი ოპერატორი");
}

//4

const score = Number(prompt("შეიყვანეთ ქულა (0-100):"));

switch (true) {
    case score >= 90:
        console.log("A");
        break;
    case score >= 80:
        console.log("B");
        break;
    case score >= 70:
        console.log("C");
        break;
    case score >= 60:
        console.log("D");
        break;
    default:
        console.log("F");
}

//5
const transport = prompt("შეიყვანეთ ტრანსპორტი (car, bus, bike, train):");

switch (transport) {
    case "car":
        console.log("მანქანა — სწრაფი და კომფორტული ინდივიდუალური ტრანსპორტი");
        break;
    case "bus":
        console.log("ავტობუსი — საზოგადოებრივი ტრანსპორტი ბევრი მგზავრისთვის");
        break;
    case "bike":
        console.log("ველოსიპედი — ეკოლოგიური და ჯანსაღი გადაადგილება");
        break;
    case "train":
        console.log("მატარებელი — გრძელი მანძილების სწრაფი ტრანსპორტი");
        break;
    default:
        console.log("უცნობი ტრანსპორტი");
}

//6

const someNumber = Number(prompt("შეიყვანეთ რიცხვი:"));

switch (true) {
    case someNumber === 0:
        console.log("რიცხვი არის 0");
        break;
    case someNumber % 2 === 0:
        console.log("რიცხვი არის ლუწი");
        break;
    default:
        console.log("რიცხვი არის კენტი");
}

//7
const role = prompt("შეიყვანეთ როლი (admin, user, guest):");

switch (role) {
    case "admin":
        console.log("სრული წვდომა სისტემაზე");
        break;
    case "user":
        console.log("სტანდარტული წვდომა");
        break;
    case "guest":
        console.log("შეზღუდული წვდომა");
        break;
    default:
        console.log("როლი არ არის განსაზღვრული");
}

//8

const color = prompt("შეიყვანეთ ფერი (red, green, blue):");

switch (color) {
    case "red":
        console.log("წითელი — ვნების და ენერგიის ფერი");
        break;
    case "green":
        console.log("მწვანე — ბუნების და სიმშვიდის ფერი");
        break;
    case "blue":
        console.log("ლურჯი — ცის და ოკეანის ფერი");
        break;
    default:
        console.log("ასეთი ფერი სისტემაში არ არის");
}

//9
const sum = (a, b) => a + b;

// 10
const evenOrOdd = (num) => num % 2 === 0 ? "ლუწი" : "კენტი";

// 11
const square = (num) => num * num;

// 12
const textLength = (str) => str.length;

// 13
const toUpperCase = (str) => str.toUpperCase();

// 14
const ageStatus = (age) => age >= 18 ? "სრულწლოვანი" : "არასრულწლოვანი";

// 15
const makePerson = (name, age) => ({ name, age });

