
const users =[  { name: "name1", 
                    lastname: "lastname1",
                    email: "namelastname1.com"},

                { name: "name2", 
                    lastname: "lastname2", 
                    email: "lastname2@gmail.com" },

                { name: "name3", 
                    lastname: "lastname3", 
                    email: "@astname3.com" }]

const [user1, user2, user3] = users;

const{name: nm1,
    lastname: sur1, 
    email: email1 } = user1

const{name: nm2, 
    lastname: sur2, 
    email: email2 } = user2

const{name: nm3, 
    lastname: sur3,
    email: email3 } = user3


console.log(nm1, sur1, email1)
console.log(nm2, sur2, sur2)
console.log(nm3, sur3, email3)


// -----------------------------------------



let fistn = prompt(" enter nsme:")
let lastn = prompt("enter lastname:")

let user = {}

user.firstn = firstname
user.lastn = lastname

let {
    firstn: name = "idk",
    lastn: surname = "idk",
    email = "idkidk@gmail.com"
} = user

console.log("სახელი:", name)
console.log("გვარი:", surname)
console.log("ასაკი:", age)
console.log("იმეილი:", email)