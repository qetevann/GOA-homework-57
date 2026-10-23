//1

const company = {
    name: "TechCorp",
    location: {
        country: "Georgia",
        city: {
            name: "Tbilisi",
            street: "Rustaveli"
        }
    },
    employees: [
        { name: "Nika", age: 22 },
        { name: "Giorgi", age: 25 }
    ]
};

const {
    name: companyName,
    location: { country, city: { name: cityName, street } },
    employees: [{ name: firstEmployeeName }, { age: secondEmployeeAge }]
} = company;

console.log(companyName);
console.log(country);
console.log(cityName);
console.log(street);
console.log(firstEmployeeName);
console.log(secondEmployeeAge);

//2
const university = {
    name: "TSU",
    faculty: {
        title: "Computer Science",
        head: {
            name: "Irakli",
            age: 50
        }
    },
    students: [
        {
            name: "Ana",
            grades: {
                math: 90,
                js: 95
            }
        }
    ]
};

const {
    name: universityName,
    faculty: { title: facultyTitle, head: { name: headName } },
    students: [{ name: studentName, grades: { math: mathGrade, js: jsGrade } }]
} = university;

console.log(universityName);
console.log(facultyTitle);
console.log(headName);
console.log(studentName);
console.log(mathGrade);
console.log(jsGrade);

//3

const store = {
    name: "MegaShop",
    address: {
        city: "Batumi",
        location: {
            street: "Chavchavadze",
            number: 10
        }
    },
    products: [
        {
            name: "Laptop",
            price: 2500
        },
        {
            name: "Phone",
            price: 1200
        }
    ]
};

const {
    name: storeName,
    address: { city: storeCity, location: { street: storeStreet } },
    products: [{ name: firstProductName }, { price: secondProductPrice }]
} = store;

console.log(storeName);
console.log(storeCity);
console.log(storeStreet);
console.log(firstProductName);
console.log(secondProductPrice);

//4
const user = {
    name: "Nika",
    surname: "Beridze",
    address: {
        country: "Georgia",
        city: {
            name: "Tbilisi",
            street: "Pekini"
        }
    }
};

const {
    name: userName,
    surname: userSurname,
    address: { country: userCountry, city: { name: userCityName, street: userStreet } }
} = user;

console.log(userName);
console.log(userSurname);
console.log(userCountry);
console.log(userCityName);
console.log(userStreet);

//5

const car = {
    brand: "BMW",
    model: "M5",
    engine: {
        type: "V8",
        power: {
            hp: 600,
            torque: 750
        }
    }
};

const {
    brand,
    model,
    engine: { type: engineType, power: { hp, torque } }
} = car;

console.log(brand);
console.log(model);
console.log(engineType);
console.log(hp);
console.log(torque);