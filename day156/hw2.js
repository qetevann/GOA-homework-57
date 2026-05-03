


let count = Number(localStorage.getItem('count')) || 0

document.getElementById('count').textContent = count


function add(){
    count++

    document.getElementById('count').textContent = count
    localStorage.setItem ('count', count)
}


function minus(){
    count--

    document.getElementById('count').textContent = count
    localStorage.setItem ('count', count)
}


function reset(){
    count= 0
    document.getElementById('count').textContent = count

    localStorage.setItem('count', count)
}