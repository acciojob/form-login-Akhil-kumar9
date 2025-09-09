function getFormvalue() {
  // Get the form element
  let form = document.getElementById("form1");

  // Retrieve values and trim spaces
  let firstName = form.fname.value.trim();
  let lastName = form.lname.value.trim();

  // Handle empty fields
  if (!firstName && !lastName) {
    alert("Please enter your first and last name.");
  } else {
    alert(firstName + " " + lastName);
  }

  // Prevent form submission (page reload)
  return false;
}

