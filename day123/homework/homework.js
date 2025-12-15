function Person(name, age, job){
    this.name = name
    this.age = age
    this.job = job

            this.info1 = function (){
                return this.name + " : " + this.job
            }
}

// const name1 = document.getElementById('nameinput')
// const age1 = document.getElementById('ageinput')
// const job1 = document.getElementById('jobinput')
// const button = document.getElementById('btn')
const resdiv = document.getElementById('result')
const form = document.getElementById('form1')

const body = document.body

form.addEventListener('submit', 
    function (e){
        e.preventDefault()
        const person1 = new Person(
            e.target.name.value,
            e.target.age.value,
            e.target.job.value
        )



            const wr = document.createElement('div')
            const p = document.createElement('p')

    p.textContent = person1.info1()

    wr.appendChild(p)
    body.appendChild(wr)
})
