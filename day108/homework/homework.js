//Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, '')
}



//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]



function filter_list(l) {
  let result = []
  for (let i of l) {
    if (typeof i === 'number') {
      result.push(i)
    }
  }
  return result
}


//Agent 47, you have a new task!
// Among citizens of the city X are hidden 2 dangerous criminal twins.
// Your task is to identify them and eliminate!

// Everyone except the twins are single-born (i.e., unique individuals).

// Given an array of integers, your task is to find two same numbers and return one of them. For example, in the array ```` the answer is 2.

// If there are no twins in the city - return None or the equivalent in the language that you are using.


function elimination(arr){
  const seen = new Set()
  for (const x of arr) {
    if (seen.has(x)) return x
    seen.add(x)
  }
  return null
}


//Story

// Ben has a very simple idea to make some profit: he buys something and sells it again. 
// Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. 
// Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task

// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)

// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

// Remarks

// All arrays or lists will always have at least one element, so you don't need to check the length.
//  Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.


function minMax(arr){
  let min = arr[0]
  let max = arr[0]

  for (const num of arr) {
    if (num < min) min = num
    if (num > max) max = num
  }

  return [min, max]
}
