

// 1)შექმენი ობიექტი შენს შესახებ,შენი დავალებაა რომ გამოიტანო კიები და ვალუები ცალ ცალკე for in ის გამოყენებით



let me = {
  name: 'qeta',
  age: 17,
  hobby: 'coding',
  city: 'tbilisi'
}

for (let key in me) {
  console.log("key:", key)
  console.log("value:", me[key])
}


// 2)შექმენი ობიექტი ავტომობილის შესახებ ,გქონდეს year , model , milage , color , შენი დავალებაა რომ შექმნა სია ვალუებისა,შემდეგ გადაუარო ამ სიას და გმაოიტანო ცალ ცალკე თითოეული value გამოიყენე for of


let car = {
  year: 2023,
  model: 'dodge',
  milage: 45000,
  color: 'white'
}

let values = Object.values(car)

for (let value of values) {
  console.log(value)
}