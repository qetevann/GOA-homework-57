const allusers = []

        
function User(name, email, password){
    this.name = name
    this.email = email
    this.password = password
}

function add(){
    const name2 = document.getElementById("name1")
    const email2 = document.getElementById("email1")
    const passw2 = document.getElementById("passw1")

    const name3 = name2.value
    const email3 = email2.value
    const passw3 = passw2.value

    const newuser = {
        name: name3,
        email: email3,
        password: passw3
    }

    allusers.push(newuser)

    console.log("ყველა მომხმარებლის ობიექტი:", allusers)
    console.log("ახლად დამატებული ობიექტი:", newuser)

    const list = document.getElementById("users")
    const listnames = document.createElement("li")
    listnames.textContent = `name: ${newuser.name}, mail: ${newuser.email}`
    
    list.appendChild(listnames)
}