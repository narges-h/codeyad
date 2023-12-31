document.getElementById('form-register').addEventListener('submit', validateRegisterForm);

   var inputFields = document.querySelectorAll("#form-register input");
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
function isValidNationalCode(nationalCode) {
  var regex = /^[0-9]{10}$/;
  if (!regex.test(nationalCode)) {
      return false;
  }

  let sumnationalCodeNumber = 0;
  for (let i = 0; i < 9; i++) {
      sumnationalCodeNumber += parseInt(nationalCode[i]) * (10 - i);
  }

  var rem = sumnationalCodeNumber % 11;
  var lastNationalCodeDigit = parseInt(nationalCode[9]);
  if ((rem > 1 && (11 * rem === lastNationalCodeDigit)) || (rem <= 1 && rem === lastNationalCodeDigit)) {
      return true;
  }

  return false;
}

function validateRegisterForm(event) {
    event.preventDefault(); // Prevent the form from submitting by default
 
    var isValid = true;
    var email = document.getElementById('emailuser').value;
    var phone = document.getElementById('phoneNumbers').value;
    var password = document.getElementById('pass').value;
    var fullname = document.getElementById('fullname').value;
    var nationalCode= document.getElementById('nationalCode').value;
    var educationLevel = document.getElementById('educationLevel').value;
    var gender = document.querySelector('input[name="gender"]:checked') !== null ? document.querySelector('input[name="gender"]:checked').value : "";
 
    var inputFields = document.querySelectorAll("#form-register input");
    inputFields.forEach(function (field) {
        if (field.value === '') {
            field.classList.add("invalid");
            isValid = false; // Set isValid to false if any field is empty
        }
    });
 
    if (!fullname || !password || !email || !phone || !nationalCode || !gender){
        if (!fullname) document.getElementById('fullname').classList.add("invalid");
        if (!password) document.getElementById('pass').classList.add("invalid");
        if (!email) document.getElementById('emailuser').classList.add("invalid");
        if (!phone) document.getElementById('phoneNumbers').classList.add("invalid");
        if (!nationalCode) document.getElementById('nationalCode').classList.add("invalid");
        if (!gender) {
            document.getElementById('genderError').innerText = 'لطفا جنسیت خود را انتخاب کنید';
            isValid = false;
        }

    } else {
        var usernameValue = fullname.trim();
        var passwordValue = password.trim();
        var emailValue = email.trim();
        var phoneNumberValue = phone.trim();
        var nationalCodeValue = nationalCode.trim();
        var educationLevelValue = educationLevel.trim(); 
  
        var fullnamePattern = /^(?![0-9])[a-zA-Z0-9\u0600-\u06FF]{3,}$/;
        var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/;
        var phoneNumberPattern = /^0\d{10}$/;
        var educationLevelPattern = /^(highschool|lisans|foghlisans|doctor)$/;
        var emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
     
        if (!educationLevelPattern.test(educationLevelValue)) { 
            alert("مدرک تحصیلی را انتخاب کنید")
            isValid = false;
       }
       if (!emailPattern.test(emailValue)) {
        var errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.innerText ='ایمیل نامعتبر است';
        document.getElementById('email').appendChild(errorMessage);
        document.getElementById('emailuser').classList.add("invalid");
        isValid = false;
     }
    if (!phoneNumberPattern.test(phoneNumberValue)) {
        var errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.innerText = 'لطفا یک شماره تلفن صحیح وارد کنید';
        document.getElementById('password-forget').appendChild(errorMessage);
        document.getElementById('phoneNumbers').classList.add("invalid");
        isValid = false;
    }  
     if (!isValidNationalCode(nationalCodeValue)) {
        var errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.innerText = 'کدملی نامعتبر است';
        document.getElementById('nationalCodes').appendChild(errorMessage);
        document.getElementById('nationalCode').classList.add("invalid");
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
      if (!fullnamePattern.test(usernameValue)) {
                var errorMessage = document.createElement('p');
                errorMessage.className = 'error-message';
                errorMessage.innerText = 'لطفا نام کاربری صحیح را وارد کنید';
                document.getElementById('fullnames').appendChild(errorMessage);
                document.getElementById('fullname').classList.add("invalid");
                isValid = false;
            }
        }
    

        // Redirect to the desired page if the form is valid
        if (isValid) {
            // Your validation logic here...
            // If validation passes, redirect to the dashboard page
            window.location.href = "login.html";
        }
     
        return isValid;
     }