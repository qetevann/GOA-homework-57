function Travel(age, years){
    this.age = age
    this.years = years

    this.calcage = function (){
        const futureage = this.age + this.years
        document.getElementById("r")
            `you will be ${futureage} years old`
    }
}

function calcfutureage() {
    const agevalue = Number(document.getElementById("crntage").value)
    const yearsvalue = Number(document.getElementById("travelyears").value)

    const travel = new TimeTravel(agevalue, yearsvalue)
    travel.calcage()
}
