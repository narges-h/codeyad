document.getElementById('form-register').addEventListener('submit', validateRegisterForm);

var inputFields = document.querySelectorAll("#form-register input");
inputFields.forEach(function (field) {
  field.addEventListener('input', function () {
    if (this.value !== '') {
      this.classList.remove("invalid");
    } else {
      this.classList.add("invalid");
    }
  });
});

function isValidNationalCode(nationalCode) {
  if (/^[0-9]{10}$/.test(nationalCode)) { 
    let sumCodemelliNumber = 0;
    for (let i = 0; i < 9; i++) {
      sumCodemelliNumber += parseInt(nationalCode[i]) * (10 - i);
    }
    let rem = sumCodemelliNumber % 11;
    let lastNationalCodeDigit = parseInt(nationalCode[9]);
    if ((rem > 1 && (11 - rem === lastNationalCodeDigit)) || (rem <= 1 && rem === lastNationalCodeDigit)) { 
      return true;
    } else {
      return false;
    }
  } else { 
    return false;
  }
}

function findErrorMessage(fieldId) {
  switch (fieldId) {
    case 'fullname':
      return document.getElementById('fullnameError');
    case 'nationalCode':
      return document.getElementById('nationalCodeError');
    case 'emailuser':
      return document.getElementById('emailError');
    case 'pass':
      return document.getElementById('passwordError');
    case 'phoneNumbers':
      return document.getElementById('phoneNumbersError');
    case 'gender':
      return document.getElementById('genderError');
    default:
      return null;
  }
}
var isValid = true;


function validateRegisterForm(event) {
  event.preventDefault(); 

  var fullname = document.getElementById('fullname');
  var password = document.getElementById('pass');
  var nationalCode = document.getElementById('nationalCode');
  var phone = document.getElementById('phoneNumbers');
  var email = document.getElementById('emailuser');
  var isValid = true;

  var inputFields = document.querySelectorAll("#form-register input");
  var errorMessages = document.querySelectorAll("#form-register .error-message");
  inputFields.forEach(function (field) {
    field.classList.remove("invalid");
  });
  errorMessages.forEach(function (message) {
    message.textContent = "";
  });
  if (fullname) {
    var fullnameValue = fullname.value.trim();
    var fullnamePattern = /^(?![0-9])[a-zA-Z0-9\u0600-\u06FF]{3,}$/;
    if (!fullnamePattern.test(fullnameValue)) {
      fullname.classList.add("invalid");
      var existingErrorMessage = findErrorMessage(fullname);
      if (!existingErrorMessage) {
        var errorMessage = document.createElement('span');
        errorMessage.textContent = 'لطفا یک نام کاربری مناسب وارد کنید';
        errorMessage.style.color = "red";
        errorMessage.classList.add('error-message');
        fullname.parentElement.appendChild(errorMessage);
      }
      isValid = false;
    }
  }


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

  if (nationalCode) {
    var nationalCodeValue = nationalCode.value.trim();
    if (!isValidNationalCode(nationalCodeValue)) {
      nationalCode.classList.add("invalid");
      var existingErrorMessage = findErrorMessage(nationalCode);
      if (!existingErrorMessage) {
        var errorMessage = document.createElement('span');
        errorMessage.textContent = 'لطفا کد ملی معتبر وارد کنید';
        errorMessage.style.color = "red";
        errorMessage.classList.add('error-message');
        nationalCode.parentElement.appendChild(errorMessage);
      }
      isValid = false;
    }
  }

  if (phone) {
    var phoneNumberValue = phone.value.trim();
    var phoneNumberPattern = /^0\d{10}$/;
    if (!phoneNumberPattern.test(phoneNumberValue)) {
      phone.classList.add("invalid");
      var existingErrorMessage = findErrorMessage(phone);
      if (!existingErrorMessage) {
        var errorMessage = document.createElement('span');
        errorMessage.textContent = 'لطفا شماره تلفن معتبر وارد کنید';
        errorMessage.style.color = "red";
        errorMessage.classList.add('error-message');
        phone.parentElement.appendChild(errorMessage);
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

  var genderOptions = document.querySelectorAll('#form-register input[name="gender"]');
  var isGenderSelected = Array.from(genderOptions).some(option => option.checked);

  if (!isGenderSelected) {
    var errorMessage = document.createElement('span');
    errorMessage.textContent = 'لطفا جنسیت خود را انتخاب کنید';
    errorMessage.style.color = "red";
    errorMessage.classList.add('error-message');
    document.getElementById('genderError').appendChild(errorMessage);
    isValid = false;
  }


  if (isValid) {
    window.location.href = "login.html";
  }



  return isValid;
}
