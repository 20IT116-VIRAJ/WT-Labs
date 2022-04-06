const number = Number(prompt("enter a number"));
const Container = document.getElementById('container');
const p = document.getElementById('para');
console.log(typeof number)
console.log(Container)

if(number%2==0){
    Container.classList.add('bg_green')
    p.innerHTML = `${number} is even`
}
else{
    Container.classList.add('bg_red')
    p.innerHTML = `${number} is odd`
}