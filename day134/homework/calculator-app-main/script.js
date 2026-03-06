

let display = document.getElementById("res")
let buttons = document.querySelectorAll(".num, #plus, #minus, #x, #gayofa, #dot")

let equal = document.getElementById("udris")
let del = document.getElementById("del")
let reset = document.getElementById("reset")

let first = ''
let second = ''
let operator = ''


plus.onclick = function(){
    operator = "+"
    display.textContent = first + operator
}

minus.onclick = function(){
    operator = '-'
    display.textContent = first + operator
}

multiply.onclick = function(){
    operator = 'x'
    display.textContent = first + operator
}

divide.onclick = function(){
    operator = '/'
    display.textContent = first + operator
}


equal.onclick = function(){
    let a = Number(first)
    let b = Number(second)
    let result = 0

    if (operator === "+") result = a + b
    if (operator === "-") result = a - b
    if (operator === "x") result = a * b
    if (operator === "/") result = a / b

    display.textContent = result

    first = result.toString()
    second = ''
    operator = ''
}

reset.onclick = function(){
    first = ''
    second = ''
    operator = ''
    display.textContent = ''
}

del.onclick = function(){
    if (second !== ''){
        second = second.slice(0, -1)
    } else if (operator !== ''){
        operator = ''
    } else {
        first = first.slice(0, -1)
    }

    display.textContent = first + operator + second
}




