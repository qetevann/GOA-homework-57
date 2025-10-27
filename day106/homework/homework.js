

// CODEWARS

// 1) Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


function basicOp(operation, value1, value2){
  if(operation == '+'){
    return value1 + value2
  }else if(operation == '-'){
    return value1 - value2
  }else if (operation == '*'){
    return value1 * value2
  }else if (operation == '/'){
    if (value2 != 0){
      return value1 / value2
    }else{
      return "you can not devide number by 0."
    }
  }else{
    return 'invalid operator.'
  }
    
}



// 2) Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.


function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo'
  } else {
    return name + ' does not play banjo'
  }
}