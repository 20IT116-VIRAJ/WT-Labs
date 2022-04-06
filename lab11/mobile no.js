function phonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if (inputtxt.value.match(phoneno)) {
      alert("Valid mobile number");
      return true;
    } else {
      alert("Invalid mobile number");
      return false;
    }
  }
  