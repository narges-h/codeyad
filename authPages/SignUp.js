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
    event.preventDefault(); 
    var email = document.getElementById('emailuser').value;
    var phone = document.getElementById('phoneNumbers').value;
    var password = document.getElementById('pass').value;
    var fullname = document.getElementById('fullname').value;
    var nationalCode= document.getElementById('nationalCode').value;
    var educationLevel = document.getElementById('educationLevel').value;
    var gender = document.querySelector('input[name="gender"]:checked') !== null ? document.querySelector('input[name="gender"]:checked').value : "";
  
    var isValid = true; // Flag to track form validity
  
    // Reset previous invalid field styles
    var inputFields = document.querySelectorAll("#form-register .input-box input");
    inputFields.forEach(function (field) {
        field.classList.remove("invalid");
    });
  
    if (fullname && password && email && phone && nationalCode && gender) {
        var usernameValue = fullname.trim();
        var passwordValue = password.trim();
        var emailValue = email.trim();
        var phoneNumberValue = phone.trim();
        var nationalCodeValue = nationalCode.trim();
        var educationLevelValue = educationLevel.trim(); 
  
        // Validate patterns for individual fields
        var fullnamePattern = /^(?![0-9])[a-zA-Z0-9\u0600-\u06FF]{3,}$/;
        var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/;
        var phoneNumberPattern = /^0\d{10}$/;
        var emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        var educationLevelPattern = /^(highschool|lisans|foghlisans|doctor)$/;
  
        if (!fullnamePattern.test(usernameValue)) {
           document.getElementById('fullname').classList.add("invalid");
            isValid = false;
        }
  
        if (!passwordPattern.test(passwordValue)) {
           document.getElementById('pass').classList.add("invalid");
            isValid = false;
        }
  
        if (!isValidNationalCode(nationalCodeValue)) {
           document.getElementById('nationalCode').classList.add("invalid");
            isValid = false;
        }
  
        if (!phoneNumberPattern.test(phoneNumberValue)) {
           document.getElementById('phoneNumbers').classList.add("invalid");
            isValid = false;
        }
  
        if (!emailPattern.test(emailValue)) {
           document.getElementById('emailuser').classList.add("invalid");
            isValid = false;
        }
        if (!educationLevelPattern.test(educationLevelValue)) { 
             alert("مدرک تحصیلی را انتخاب کنید")
             isValid = false;
        }
    } else {
        
        if (!fullname) document.getElementById('fullname').classList.add("invalid");
        if (!password) document.getElementById('pass').classList.add("invalid");
        if (!email) document.getElementById('emailuser').classList.add("invalid");
        if (!phone) document.getElementById('phoneNumbers').classList.add("invalid");
        if (!nationalCode) document.getElementById('nationalCode').classList.add("invalid");
        if (!gender) document.querySelector('input[name="gender"]').parentNode.classList.add("invalid");
        isValid = false;
    }
  
    if (isValid) {
        // Submit the form or perform further actions
        window.location.href = "../dashbordPage/dashbord.html";
    }
  
    return isValid;
  }
  