

function savename(){
    let value = document.getElementById('input').value

    document.getElementById('text').textContent = value

    localStorage.setItem('info', value)
}


let saved = localStorage.getItem('info')

if (saved){
    document.getElementById('text').textContent = saved
}