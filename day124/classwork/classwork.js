
function Student(name, date) {
    this.name = name
    this.date = date

    this.info = function (){
        console.log(
            `srudents name: ${this.name}, started goa on: ${this.date}`
        )
    }
}