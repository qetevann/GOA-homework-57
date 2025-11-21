


const button1 = document.getElementById('bttn')

let count = 0

function button2(){
  count++
  console.log("clicked", count)
}

button1.addEventListener('click', button2)
