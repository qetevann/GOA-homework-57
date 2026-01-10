const time1 = document.getElementById('time')
    const heart1 = document.getElementById('heart')
    const strap1 = document.getElementById('strap')

    function updatetime(){
            const d = new Date()
            time1.textContent = d.toLocaleTimeString()
    }
    setInterval(updatetime, 1000)
    updatetime()

    function heart1() {
      heart1.textContent = Math.floor(Math.random() * 51) + 60
    }
    setInterval(heart1, 20000)

    function setColor(color) {
        strap1.style.background = color
    }

    function buy() {
            document.getElementById('model').style.display = 'flex'
    }