// login button functionality
const loginBtn = document.getElementById('login-btn');
const userNumber = document.getElementById('user-number');
const userPin = document.getElementById('user-pin');
const number = "01234567899";
const pin = "1234";

loginBtn.addEventListener("click", function(event){
    event.preventDefault();
    if(userNumber.value === number && userPin.value===pin){
        window.location.href="./home.html";
        userNumber.value = "";
        userPin.value = "";
    } else if(userNumber.value === number){
        alert("Pin is Wrong");
        userPin.value = "";
    } else {
        alert("Invalid Credentials");
        userNumber.value = "";
        userPin.value = "";
    } 

    
});