const success = document.querySelector(".successfull")
const typeForm = document. querySelector(".type_form")
const invalid1 = document.querySelector("#invalid-feedback1")
const invalid2 = document.querySelector("#invalid-feedback2")
const invalid3 = document.querySelector("#invalid-feedback3")
const invalid4 = document.querySelector("#invalid-feedback4")

const username = document.querySelector("#user_name")
const email = document.querySelector("#email_name")
const password = document.querySelector("#Password")
const confirmPassword = document.querySelector("#CPassword")


const submission = document.querySelector(".submitButton");

const usernameValidationRegex = /^[a-zA-Z0-9]+$/;
const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const confirmPasswordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/;




submission.addEventListener("click", function(){
    let inputUsername = username.value
    let inputPassword = password.value
    let inputEmail = email.value
    let inputConfirmPassword = confirmPassword.value

var validUsername = inputUsername.match(usernameValidationRegex);
var validPassword = inputPassword.match(passwordValidationRegex);

var validEmail = inputEmail.match(emailValidationRegex);
if(validUsername && validEmail && validPassword && inputPassword === inputConfirmPassword){
    success.style.display = "block"
    typeForm.style.display = "none"
}else if(!validUsername && !validEmail && !validPassword && inputPassword === inputConfirmPassword){
    invalid1.style.display = "block"
    invalid2.style.display = "block"
    invalid3.style.display = "block"
    invalid4.style.display = "block"
}else if(validUsername && !validEmail && !validPassword && inputPassword === inputConfirmPassword){
    invalid2.style.display = "block"
    invalid3.style.display = "block"
    invalid4.style.display = "block"
}else if(!validUsername && validEmail && !validPassword && inputPassword === inputConfirmPassword){
    invalid1.style.display = "block"
    invalid3.style.display = "block"
    invalid4.style.display = "block"
}else if(validUsername == null){
    invalid1.style.display = "block"
    invalid1.innerText = "Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable."
}else if (validEmail == null){
    invalid2.style.display = "block"
    invalid2.innerText = "Enter a Valid Email address"
}else if (validPassword == null){
    invalid3.style.display = "block"
    invalid3.innerText = "Your password must contain least 1 uppercase, lowercase, special character and must contain at least 8 characters"
}else if (inputPassword != inputConfirmPassword){
        invalid4.style.display = "block"
        invalid4.innerText = "Password don't match"
}
})


username.addEventListener ("click", function(){
    invalid1.style.display = "none"
})

email.addEventListener ("click", function(){
    invalid2.style.display = "none"
})

password.addEventListener ("click", function(){
    invalid3.style.display = "none"
})

confirmPassword.addEventListener ("click", function(){
    invalid4.style.display = "none"
})


