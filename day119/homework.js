let count = 0

const value = document.getElementById('count')
const inc = document.getElementById('plus')
const dec = document.getElementById('minus')
const reset = document.getElementById('reset')


function changecolors(){
  if (count > 0){
    value.style.color = 'green'
  }else if (count < 0){
    value.style.color = 'red'
  }else{
    value.style.color = 'white'
  }
}
inc.addEventListener('click', function() {
  count++
  value.textContent = count
  changecolors()
})

dec.addEventListener('click', function() {
  count--
  value.textContent = count
  changecolors()
})

reset.addEventListener('click', function() {
  count = 0
  value.textContent = count
  changecolors()
})