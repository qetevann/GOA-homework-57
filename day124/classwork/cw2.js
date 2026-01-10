function Randomname(name, age){
    this.name = name
    this.age = age

    this.dspl = function(){
        document.getElementById("result")
            console.log(`name: ${this.name}, age: ${this.age}`)
    };
}

function submit(){
    const namevalue = document.getElementById("name").value
    const agevalue = document.getElementById("age").value

    const student = new Student(namevalue, agevalue)
    student.dspl()
}
