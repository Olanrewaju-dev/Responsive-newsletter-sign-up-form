function validateEmailInput() {
  let email = document.getElementById("email").value;

  // if input value is valid, execute code block below:
  if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    document.getElementById("error").style.display = "flex";
    document.getElementById("error").style.color = "red";
    document.getElementById("error").innerHTML = "Valid email required!";
    setTimeout(() => {
      document.getElementById("error").style.display = "none";
    }, 1500);
  } else {
    handleSubmit();
    document.getElementById("emailValue").innerHTML = email;
    console.log(email);
  }
}

// function that handles form submission
function handleSubmit() {
  // targeting and selection DOM elements
  let signUpDisplay = document.getElementsByTagName("main");
  let successMessageDisplay =
    document.getElementsByClassName("success-message");

  // initiating display switch onclick of sign up button
  signUpDisplay[0].style.display = "none";
  successMessageDisplay[0].style.display = "flex";
}

function handleDismiss() {
  // targeting and selection DOM elements
  let signUpDisplay = document.getElementsByTagName("main");
  let successMessageDisplay =
    document.getElementsByClassName("success-message");

  // initiating display switch onclick of dismiss message button
  signUpDisplay[0].style.display = "flex";
  successMessageDisplay[0].style.display = "none";

  // setting the input value to empty string
  document.getElementById("email").value = "";

  // removing the error display message
  document.getElementById("error").style.display = "none";
}
