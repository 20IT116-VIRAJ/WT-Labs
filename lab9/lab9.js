function getStringLenght(){
    let str = new String("nesh");
    str = prompt("Enter your Full Name :");
    let strele = document.getElementById("getString");
    strele.textContent = str.length;
}
function getRoundof(){
    document.getElementById("getPI").textContent = Math.PI;
    document.getElementById("getRoundof").textContent = Math.round(Math.PI);
}
function getDate(){
    document.getElementById("getAge").textContent = new Date();
}
function getrandomNumber(){
    document.getElementById("getRandom").textContent = new Number(Math.random()*100);
}
function getperson(){
    let str = new String();
    let result= [];
    for(let i=0; i<2; i++){
        str = prompt("Enter fav person ", );
        result.push(str);
    }
    document.getElementById("person").textContent = result;
}
