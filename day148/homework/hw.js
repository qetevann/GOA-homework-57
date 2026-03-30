// 1)


const students = [
    { name: "ანა", age: 17, grade: 9 },
    { name: "ლაშა", age: 20, grade: 12 },
    { name: "მარიამი", age: 18, grade: 11 },
    { name: "გიორგი", age: 16, grade: 10 }
];

const adults = students.filter(function(student) {
    return student.age >= 18
})

console.log(adults);


// 5)

const employee = [
    { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
    { name: "გიორგი", age: 30, department: "HR", salary: 900 },
    { name: "ანა", age: 22, department: "IT", salary: 1000 },
    { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
    { name: "ნინო", age: 35, department: "IT", salary: 2000 }
];


const idk = employee
    .filter(function(employee) {
        return employee.department === "IT" && employee.salary < 1500 && employee.age < 30
    })
    .map(function(employee) {
        return employee.name
    })

console.log(idk)