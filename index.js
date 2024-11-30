const form = document.getElementById("form");
const email = document.getElementById("email");
const error_icon = document.querySelector(".error-icon");
const small = document.querySelector("small");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = email.value;

  if (!validateEmail(emailVal)) {
    error_icon.style.display = "block";
    small.style.display = "block";
    e.preventDefault();
  } else {
    form.classList.remove("error");
    document.querySelector(
      "body"
    ).innerHTML = `<div style="display:flex; align-items: center; justify-content: center;"><h1>Done !</h1></div>`;
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
