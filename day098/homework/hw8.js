

// 8)მომხმარებელს შემოატანინე ასაკი და სახელი,
// შემდეგ შეამოწმეთ --> თუ სახელი უდრის "nika"
//  და ასაკი მეტია 18 ზე დაუკონსოლლოგეთ -->"your name is nika and you are adult" ,
//  ასევე შეამოწმეთ თუ შემოყვანილი სახელი უდრის "dorblavaso" 
// და შემოტანილი ასაკი ნაკლებია 18 ზე მაშინ დაუკონსოლლოგეთ --> "You are dorbla and you are too young" 
// სხვა შშემთხვევაში დაუკონსოლლოგეთ --> "you have weird name and age"


c1 = prompt('enter name')
c2 = Number(prompt('enter age'))

if (c1 === 'nika' && c2 > 18){
    console.log('your name is nika and you are an adult')
}else if(c1 === 'dorblavaso' && c2 < 18){
    console.log('you are dorbla amd u are too young')
}else{
    console.log('u have weird name and age')
}