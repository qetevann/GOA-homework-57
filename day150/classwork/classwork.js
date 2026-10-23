class Bank {
    constructor(firstName, lastName, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(
            `${this.firstName} ${this.lastName}-მა შეიტანა ${amount}₾. მიმდინარე ბალანსია: ${this.balance}₾`
        );
    }
}




const account = new Bank("გიორგი", "მაისურაძე", 500);

const depositAmount = Number(prompt("რა თანხის შეტანა გსურთ ანგარიშზე?"));

account.deposit(depositAmount);



