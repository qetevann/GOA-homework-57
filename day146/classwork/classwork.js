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
    name,
    address: { city, ...restAddress },
    ...restStore
} = store;

console.log(name);        
console.log(city);       
console.log(restAddress); 
console.log(restStore);   