//The Story:

// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. 
// With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! 
// He wants you to write a simple program telling him if he will be able to fit all the passengers.
// Task Overview:

// You have to write a function that accepts three parameters:

//     cap is the amount of people the bus can hold excluding the driver.
//     on is the number of people on the bus excluding the driver.
//     wait is the number of people waiting to get on to the bus excluding the driver.

// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.


function enough(cap, on, wait) {
  const total = on + wait
  if (total <= cap){
    return 0
  }else {
    return total - cap
  }
}



//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


function boolToWord( bool ){
  if(bool == true){
    return 'Yes'
  }else{
    return 'No'
  }
}



//Task

// You get an array of numbers, return the sum of all of the positives ones.
// Example

//     [1, -4, 7, 12] => 1+7+12=20 1 + 7 + 12 = 20 1+7+12=20

// Note

// If there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  let total = 0
  if (arr.length == 0) return 0

  for (let num of arr) {
    if (num > 0) {
      total += num
    }
  }

  return total
}



//Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.


function findAverage(array) {
  if (array.length == 0) return 0

  let total = 0
  for (let num of array) {
    total += num
  }

  return total / array.length
}


//Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

//     "I love you"
//     "a little"
//     "a lot"
//     "passionately"
//     "madly"
//     "not at all"

// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.


function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
  ]
    return phrases[(nbPetals - 1) % 6]
}
