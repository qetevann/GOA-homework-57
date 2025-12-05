const form = document.getElementById("form1")
const list = document.getElementById("list")

    form.addEventListener("submit", function(e) {
        e.preventDefault()

        const name = document.getElementById("name1").value
        const lastname = document.getElementById("lastname1").value
        const age = document.getElementById("age1").value

        const li = document.createElement("li")
        li.textContent = `name: ${name1}, lastname: ${surname1}, age: ${age1}`
        list.appendChild(list1)
    })