function check_validation(){
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const phoneno = document.getElementById('phoneno').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    let flag=true;
    document.getElementById('err_firstname').style.display = 'none';
    document.getElementById('err_lastname').style.display = 'none';
    document.getElementById('err_phoneno').style.display = 'none';
    document.getElementById('err_age').style.display = 'none';
    document.getElementById('err_email').style.display = 'none';
    document.getElementById('err_password').style.display = 'none';
    
    if(firstname == '')
    {
        document.getElementById('err_firstname').style.display = 'inline-block';
        flag=false;
    }
    if(lastname == '')
    {
        document.getElementById('err_lastname').style.display = 'inline-block';
        flag=false;
    }
    if(phoneno == '')
    {
        document.getElementById('err_phoneno').style.display = 'inline-block';
        flag=false;
    }
    if(age == '')
    {
        document.getElementById('err_age').style.display = 'inline-block';
        flag=false;
    }
    if(email == '')
    {
        document.getElementById('err_email').style.display = 'inline-block';
        flag=false;
    }
    if(pass == '')
    {
        document.getElementById('err_password').style.display = 'inline-block';
        flag=false;
    }
    return flag;
}