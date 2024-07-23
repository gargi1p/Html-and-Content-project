function validateForm(form) {
    // Get password and confirm password fields
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const email = document.getElementById("email").value;


    // Check if all fields are filled
    const allFilled = password !== "" && confirmPassword !== "";
  
    if (!allFilled) {
      alert("Please fill all the fields!");
      return false; // Prevent form submission
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match! Please re-enter your password.");
      return false; // Prevent form submission
    }
  
    // Validate email format using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return false; // Prevent form submission
   }
   
    // If all validations pass, redirect to home page
    window.location.href = "home.html";
    return true;
  }
  
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function(event) {
    if (!validateForm(this.form)) {
      event.preventDefault(); // Prevent default form submission if validation fails
    }
  });
  




  