//1

const student = {
    name: "გიორგი",
    age: 21,
    faculty: "ინფორმატიკა"
};

const { name, age, faculty } = student;

console.log(name);     
console.log(age);      
console.log(faculty); 


//2

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};

const { brand: carBrand, model: carModel, year } = car;

console.log(carBrand);  
console.log(carModel);  
console.log(year);      


//3

const user = {
    username: "luka95",
    email: "luka95@example.com"
};

const { username, email, role = "guest" } = user;

console.log(username);
console.log(email);    
console.log(role);     

//4
const person = {
    firstName: "ნინო",
    lastName: "ბერიძე",
    address: {
        city: "თბილისი",
        country: "საქართველო"
    }
};

const {
    firstName,
    address: { city, country }
} = person;

console.log(firstName); 
console.log(city);      
console.log(country);   

//5

const product = {
    title: "სმარტფონი",
    price: 899,
    currency: "GEL"
};

function printProductInfo({ title, price, currency }) {
    console.log(`პროდუქტი: ${title}, ფასი: ${price} ${currency}`);
}

printProductInfo(product);
