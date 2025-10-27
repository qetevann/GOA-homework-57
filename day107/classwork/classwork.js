

//There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. 
// You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average
//  and compare your score!

// Return true if you're better, else false!
// Note:

// Your points are not included in the array of your class's points.
//  Do not forget them when calculating the average score! 
// function betterThanAverage(classPoints, yourPoints)


function betterThanAverage(classPoints, yourPoints) {
  let sum = 0
  for (let i = 0; i < classPoints.length; i++){
    sum += classPoints[i]
  }
  
  let average = (sum + yourPoints) / (classPoints.length + 1)
  return yourPoints > average
}



//You will be given an array a and a value x.
//  All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.


function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true
    }
  }
  return false
}


//You're writing code to control your town's traffic lights. 
// You need a function to handle each change from green, 
// to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument

// representing the current state of the light and returns a string 
// representing the state the light should change to.

// For example, when the input is green, output should be yellow.


function updateLight(current) {
  if (current === "green"){
    return "yellow"
  }if (current === "yellow"){
    return "red"
  }if (current === "red"){
    return "green"
  
  }
    
}