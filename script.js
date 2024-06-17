let Password = document.getElementById("Password");
let IIcon = document.getElementById("I-Icon");

function togglePasswordVisibility() {
  if (Password.type == "password") {
    Password.type = "text";
    IIcon.src = "eye-open.png";
  } else {
    Password.type = "password";
    IIcon.src = "eye-close.png";
  }
}
