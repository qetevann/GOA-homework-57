

//You are given a string of words and numbers. Extract the expression including:

//     the operator: either addition ("gains") or subtraction ("loses")
//     the two numbers that we are operating on

// Return the result of the calculation.

// Notes:

//     "loses" and "gains" are the only two words describing operators
//     No fruit debts nor bitten apples = The numbers are integers and no negatives

// Examples

// "Panda has 48 apples and loses 4"  -->  44
// "Jerry has 34 apples and gains 6"  -->  40


function calculate(string) {
 let split = string.split(' ')
 
 if(split.includes('loses')){
   return Number(split[2]) - Number(split[6])
 }else{
   return Number(split[2]) + Number(split[6])
 }
}



//Introduction

// You are the developer working on a website which features a large counter on its homepage, proudly displaying the number of happy customers who have downloaded your company's software.

// You have been tasked with adding an effect to this counter to make it more interesting.

// Instead of just displaying the count value immediately when the page loads, we want to create the effect of each digit cycling through its preceding numbers before stopping on the actual value.

// Task

// As a step towards achieving this; you have decided to create a function that will produce a multi-dimensional array out of the hit count value. Each inner dimension of the array represents an individual digit in the hit count, and will include all numbers that come before it, going back to 0.
// Rules

//     The function will take one argument which will be a four-character string representing hit count
//     The function must return a multi-dimensional array containing four inner arrays of integers
//     The final value in each inner array must be the actual value to be displayed

// Examples

// "1250" --> [ [0,1], [0,1,2], [0,1,2,3,4,5], [0] ]
// "0050" --> [ [0], [0], [0,1,2,3,4,5], [0] ]
// "0000" --> [ [0], [0], [0], [0] ]



function counterEffect(hitCount) {
  let sum =[]
  hitCount.split("")
  for(let i = 0; i < hitCount.length; i++){
    let arr = []
    for (let s = -1; s < hitCount[i]; s++){
      arr.push(s +1)
   
    }
  sum.push(arr)
  
    
  }
  
  return sum
}