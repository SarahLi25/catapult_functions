let button = document.querySelector(".password-check");
let correctPassword = "YourMomSucks";
// 1 - Write your function here
// Write a function to test if the password is correct
// The function should take in the text of the password
// as an input, and return true if the password is correct
function TheCorrectPass (pass){
    if (correctPassword===pass) {
        return true;
    }
    return false;
}

button.addEventListener("click", function() {

    let password = document.querySelector(".password-input").value;

    // 2 - Call your function here, store the result in a variable
    // and use the variable to determine which message to display
   
    if (TheCorrectPass (password)) {
        document.querySelector(".yes").style = "display:block";
        document.querySelector(".denied").style = "display:none";
    } else {
        document.querySelector(".denied").style = "display:block";
        document.querySelector(".yes").style = "display:none";
    }

});

