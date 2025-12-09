function Person(name, age, job){
    this.name = name
    this.age = age
    this.job = job

            this.info1 = function (){
                return this.name + " : " + this.job
            }
}

const name1 = document.getElementById('inpname')
const age1 = document.getElementById('inpage')
const job1 = document.getElementById('inpjob')
const button = document.getElementById('btn')
const resdiv = document.getElementById('result')

button.addEventListener('click', 
    function (){
        const nameval = name1.value
        const ageval = age1.value
        const jobval = job1.value


            const wr = document.createElement('div')
            const p = document.createElement('p')

    p.textContent = user.info1()

    wr.appendChild(p)
    resdiv.appendChild(wr)
})
