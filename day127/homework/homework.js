const newyeardate = new Date("January 1, 2026 00:00:00").getTime()

function updatecd() {
        const now = new Date().getTime()


        document.getElementById("days").textContent = days
        document.getElementById("hours").textContent = hours
        document.getElementById("minutes").textContent = minutes
        document.getElementById("seconds").textContent = seconds
}

updatecd()
setInterval(updatecd, 1000)
