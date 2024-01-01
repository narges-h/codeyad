
window.addEventListener("DOMContentLoaded", function() {
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    if(storedPassword ==null && storedEmail==null){
      window.location.href="../authPages/login.html";
    }
  
    if (storedEmail && storedPassword ) {
        var emailInput = document.getElementById('emailuser');
        var passwordInput = document.getElementById('pass');
  
        if (emailInput && passwordInput) {
            emailInput.value = storedEmail;
            passwordInput.value = storedPassword;
        }
    }
  });
  