const number = parseInt(prompt('Enter the number of terms: '));

function fib(){
    let n1 = 0, n2 = 1, nextTerm,ans="";
    let ele = document.getElementById('fib_ans');
    let sp = document.getElementById('prime');
    for (let i = 1; i <= number; i++) {
        if(is_prime(n1))
        {
            sp.textContent = String(n1) + ", ";
            sp.classList.add("circle");
            sp.textContent = ans;
            ans = ans + String(n1) + ", "; 
         }
         else{
            ele.textContent = String(n1) + ", ";
            ele.textContent = ans;
            ans = ans + String(n1) + ", ";
         }
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }  
}

function is_prime(num){
    flag = true;
    for(i=2;i<=num/2;i++)
    {
        if(num % i == 0)
        {
            flag = false;
            break;
        }
    }
    return flag;
}