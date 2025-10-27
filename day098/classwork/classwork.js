let prmpt = Number( prompt('raandom'))

if (prmpt > 0 && prmpt % 2 == 0){
    console.log('this number is positive and even')
}else if (prmpt < 0 && prmpt % 2 == 1){
    console.log('this number is odd')
}else{
    console.log('this number is zero')
}