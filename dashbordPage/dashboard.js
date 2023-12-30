window.addEventListener("DOMContentLoaded", function() {
  var storedEmail = localStorage.getItem('emailuser');
  var storedPhone = localStorage.getItem('phoneNumbers');
  var storedPassword = localStorage.getItem('pass');

  if (!storedEmail || !storedPhone || !storedPassword) {
      window.location.href = "../authPages/login.html";
  } else {
      var emailInput = document.getElementById('emailuser');
      var phoneInput = document.getElementById('phoneNumbers');
      var passwordInput = document.getElementById('pass');

      if (emailInput && passwordInput && phoneInput) {
          emailInput.value = storedEmail;
          phoneInput.value = storedPhone;
          passwordInput.value = storedPassword;
      }
  }
});
