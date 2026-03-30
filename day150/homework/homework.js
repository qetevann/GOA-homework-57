// 1.

class Car{
    constructor(brand, model, year){
        this.brand = brand
        this.model = model
        this.year = year
    }

    getInfo(){
        return this.brand + " " + this.model + ", " + this.year
    }
}


// 2.

class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    changeName(newName){
        this.name = newName
    }

    increaseAge(number){
        this.age = this.age + number
    }
}

const user1 = new User("idk1", 18)

user1.changeName("idk2")
user1.increaseAge(2)


console.log(user1)



// 3.

class Calculator{
    add(a, b){
        return a + b
    }

    subtract(a, b){
        return a - b
    }

    multiply(a, b){
        return a * b
    }

    divide(a, b){
        return a / b
    }
}

const calc = new Calculator()



// 4.

class Product{
    constructor(name, price, quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    getTotalPrice(){
        return this.price * this.quantity
    }
}


console.log(product1.getTotalPrice())



// 5.

class BankAccount{
    constructor(owner, balance){
    this.owner = owner
    this.balance = balance
}

    deposit(amount){
    this.balance += amount
    console.log(this.balance)
}

    withdraw(amount){
        if (amount > this.balance){
            console.log("not enugh money to deposit")
    } else{
        this.balance -= amount
        console.log(this.balance)
    }
    }
}
console.log(account)


// 6.

class Library{
    constructor(){
        this.books = []
}

    addBook(book){
    this.books.push(book)
    console.log("book added")
}

    bookList(){
        console.log("list")
        console.log(this.books)
}
}


// 7.

class Password {
    constructor(value){
        this.value = value
}

    changePassword(newPass){
    this.value = newPass
    console.log("password has changed")
}

    checkPassword(){
    console.log('current password: ' + this.value)
}
}


