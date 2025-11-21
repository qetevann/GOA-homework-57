

// js ში createElement ის დახმარებით შექმენით div, p, button შემდეგ p და button ჩაამატეთ div ში, ამ დივს დაამატებთ dom ში 



const div1 = document.createElement('div')

const paragr1 = document.createElement('p')
paragr1.textContent = 'random paragraph1'

const button1 = document.createElement('button')
button1.textContent = 'randombutton1'


div1.appendChild(paragr1)
div1.appendChild(button1)






