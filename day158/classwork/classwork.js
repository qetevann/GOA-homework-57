

const accounts = {
    account1: {
        username: "giorgi95",
        balance: 1500
    },
    account2: {
        username: "nino_b",
        balance: 3200
    },
    account3: {
        username: "luka_g",
        balance: 800
    }
};

console.log("ორიგინალი ობიექტი:", accounts);



const stringifiedAccounts = JSON.stringify(accounts);

console.log("დასტრინგიფაებული:", stringifiedAccounts);
console.log("ტიპი:", typeof stringifiedAccounts); // string



const parsedAccounts = JSON.parse(stringifiedAccounts);

console.log("გაპარსილი:", parsedAccounts);
console.log("ტიპი:", typeof parsedAccounts); // object