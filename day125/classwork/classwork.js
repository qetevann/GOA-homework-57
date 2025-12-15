
// console.log('hours' + date.getHours())
// console.log('minutes ' + date.getMinutes())
// console.log('seconds' + date.getSeconds())


const bttn = document.getElementById('timer')

bttn.addEventListener('click', function(){
    let time = new Date()

    console.log(time.getHours(),+ ':' +time.getMinutes(), time.getSeconds())
})