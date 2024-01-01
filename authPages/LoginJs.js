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
   function validateLoginForm(event) {
    event.preventDefault(); 
    var email = document.getElementById('emailuser').value;
    var password = document.getElementById('pass').value;
    var isValid = true; // Define isValid and set its initial value to true
    var inputFields = document.querySelectorAll("#form-sign input");
    inputFields.forEach(function (field) {
        if (field.value === '') {
            field.classList.add("invalid");
            isValid = false; // Set isValid to false if any field is empty
        }
    });
    if (!password || !email ){
 
        if (!password) document.getElementById('pass').classList.add("invalid");
        if (!email) document.getElementById('emailuser').classList.add("invalid");
    }else {
   
        var passwordValue = password.trim();
        var emailValue = email.trim();
 
        var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/;
        var emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  
       if (!emailPattern.test(emailValue)) {
        var errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.innerText = 'لطفا ایمیل درست وارد کنید';
        document.getElementById('email').appendChild(errorMessage);
        document.getElementById('emailuser').classList.add("invalid");
        isValid = false;
     }
 
 
    if (!passwordPattern.test(passwordValue)) {
        var errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.innerText = 'لطفا رمز مناسب انتخاب کنید';
        document.getElementById('password').appendChild(errorMessage);
        document.getElementById('pass').classList.add("invalid");
        isValid = false;
    }
 
   if (isValid) {
       // Store username and password in local storage
       localStorage.setItem('email', email);
       localStorage.setItem('password', password);
       window.location.href = "../dashbordPage/dashbord.html";
   }
 
   return isValid;
 }
 }
 