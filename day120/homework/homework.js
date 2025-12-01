const input = document.getElementById('textinp')

const red = document.getElementById('red')
const orng = document.getElementById('orng')
const yellw = document.getElementById('yellw')
const grn = document.getElementById('grn')
const lightbl = document.getElementById('lightbl')
const bl = document.getElementById('bl')
const prpl = document.getElementById('prpl')

red.addEventListener('click', function(){
    input.style.color = 'red'
})

orng.addEventListener('click', function(){
    input.style.color = 'orange'
})

yellw.addEventListener('click', function(){
    input.style.color = 'yellow'
})

grn.addEventListener('click', function(){
    input.style.color = 'green'
})

lightbl.addEventListener('click', function(){
    input.style.color = 'lightblue'
})

bl.addEventListener('click', function(){
    input.style.color = 'blue'
})

prpl.addEventListener('click', function(){
    input.style.color = 'purple'
})
