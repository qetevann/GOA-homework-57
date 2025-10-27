



const list=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let even=[]
let odd=[]

for (let i in list){
  if (list % 2 == 0){
    even.push(i)
  }else{
    odd.push(i)
  }
}


