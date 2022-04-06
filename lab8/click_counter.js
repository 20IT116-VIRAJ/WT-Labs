const Button = document.getElementById('button')

console.log(Button)
let count = 0;
Button.addEventListener('click',()=>{
    Button.innerHTML = count;
    count++
})