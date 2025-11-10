

//1. მაქსიმუმი და მინიმუმი
// დაწერე კოდი, რომელიც გამოიტანს 5 რიცხვის მაქსიმუმს და მინიმუმს.
// გამოიყენე Math.max() და Math.min()


let list = [1, 2, 3, 4, 5, 6, 7]

console.log(Math.max(list))

console.log(Math.min(list))



//2. მრგვალება
// გამოიყენე Math.round(), Math.ceil() და Math.floor()
// შემდეგ რიცხვებზე:
// 4.7, 9.1, -3.6


console.log(Math.round(4.7)) 
console.log(Math.ceil(4.7))  
console.log(Math.floor(4.7)) 

console.log(Math.round(9.1)) 
console.log(Math.ceil(9.1)) 
console.log(Math.floor(9.1))

console.log(Math.round(-3.6)) 
console.log(Math.ceil(-3.6))  
console.log(Math.floor(-3.6))



//3
// ხარისხში აყვანა
// გამოთვალე:
// ³⁴, ⁵², ²¹⁰
// გამოიყენე Math.pow().

console.log(Math.pow(3, 4))  
console.log(Math.pow(5, 2))  
console.log(Math.pow(2, 10))  




// 4. კვადრატული ფესვი  გამოთვალე კვადრატული ფესვი რიცხვების: 25, 144, 2  შედეგები დაამრგვალე Math.round() -ით

console.log(Math.round(Math.sqrt(25)))   
console.log(Math.round(Math.sqrt(144))) 
console.log(Math.round(Math.sqrt(2)))    


// 5. აბსოლიტური მნიშვნელობა  გარდაქმენი უარყოფითი რიცხვები დადებითად: -8.3, 5 - 12  გამოიყენე Math.abs()


console.log(Math.abs(-8.3)) 
console.log(Math.abs(5))    
console.log(Math.abs(-12)) 
