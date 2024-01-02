var inputFields = document.querySelectorAll("#form-sign input");
inputFields.forEach(function (field) {
    field.addEventListener('input', function () {
      // Remove the invalid class if the field is not empty
      if (this.value !== '') {
        this.classList.remove("invalid");
      } else {
        // Add the invalid class if the field is empty
        this.classList.add("invalid");
      }
    });
   });
   function findErrorMessage(fieldId) {
    switch (fieldId) {
     case 'emailuser':
       return document.getElementById('emailError');
     case 'pass':
       return document.getElementById('passwordError');
   
       return null;
    }
 }
 var isValid = true;
 
   function validateLoginForm(event) {
    event.preventDefault(); 
    var email = document.getElementById('emailuser');
    var password = document.getElementById('pass');
    var isValid = true; // Define isValid and set its initial value to true

    var inputFields = document.querySelectorAll("#form-sign input");
    var errorMessages = document.querySelectorAll("#form-sign .error-message");
    inputFields.forEach(function (field) {
      field.classList.remove("invalid");
    });
    errorMessages.forEach(function (message) {
      message.textContent = "";
    });
    if (password) {
      var passwordValue = password.value.trim();
      var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/;
      if (!passwordPattern.test(passwordValue)) {
          password.classList.add("invalid");
          var existingErrorMessage = findErrorMessage(password);
          if (!existingErrorMessage) {
              var errorMessage = document.createElement('span');
              errorMessage.textContent = 'لطفا یک رمز عبور معتبر وارد کنید';
              errorMessage.style.color = "red";
              errorMessage.classList.add('error-message');
              password.parentElement.appendChild(errorMessage);
          }
          isValid = false;
      }
    }
    if (email) {
      var emailValue = email.value.trim();
      var emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (!emailPattern.test(emailValue)) {
          email.classList.add("invalid");
          var existingErrorMessage = findErrorMessage(email);
          if (!existingErrorMessage) {
              var errorMessage = document.createElement('span');
              errorMessage.textContent = 'لطفا یک ایمیل معتبر وارد کنید';
              errorMessage.style.color = "red";
              errorMessage.classList.add('error-message');
              email.parentElement.appendChild(errorMessage);
          }
          isValid = false;
      }
    }
  
 
   if (isValid) {
       // Store username and password in local storage
       localStorage.setItem('email', email);
       localStorage.setItem('password', password);
       window.location.href = "../dashbordPage/dashbord.html";
   }
 
   return isValid;
 }
 
 