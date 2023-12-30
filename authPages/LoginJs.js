function validateLoginForm(event) {
    event.preventDefault();
    var email = document.getElementById('emailuser').value;
    var phone = document.getElementById('phoneNumbers').value;
    var password = document.getElementById('pass').value;
  
    var isValid = true; // Flag to track form validity
  
    if (email === "") {
        document.getElementById('emailuser').classList.add("invalid");
        isValid = false;
    } else {
        document.getElementById('emailuser').classList.remove("invalid");
    }
    if (phone === "") {
        document.getElementById('phoneNumbers').classList.add("invalid");
        isValid = false;
    } else {
        document.getElementById('phoneNumbers').classList.remove("invalid");
    }
    if (password === "") {
        document.getElementById('pass').classList.add("invalid");
        isValid = false;
    } else {
        document.getElementById('pass').classList.remove("invalid");
        // Store username and password in local storage
        localStorage.setItem("emailuser", email);
        localStorage.setItem("phoneNumbers", phone);
        localStorage.setItem("pass", password);
    }
  
    if (isValid) {
        window.location.href = "../dashbordPage/dashbord.html";
    }
 }
 