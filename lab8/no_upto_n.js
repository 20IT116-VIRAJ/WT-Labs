const p = document.getElementById('para')
const number = Number(prompt("enter the number"))
let str=""
for(let i=1;i<=number;i++){
   str=str+`${i}` + "<br>"
}
console.log(str)
p.innerHTML= str