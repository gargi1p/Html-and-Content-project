 function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (password === "" || username === "") {
      alert("Please fill both username and password!");
  } else {
      window.location.href = "home.html"
  }
}
document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault(); 
  validateForm();
});