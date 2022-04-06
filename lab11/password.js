function CheckPassword(inputtxt) {
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (inputtxt.value.match(paswd)) {
      alert("Hurray! Welcome");
      return true;
    } else {
      alert("Invalid password");
      return false;
    }
  }
  