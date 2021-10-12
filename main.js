let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  job = id("job"),
  birthdate = id("date"),
  phone = id("phone"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(job, 2, "Jobtitle cannot be blank");
  engine(date, 3, "Birthdate cannot be blank");
  engine(phone, 4, "Phone number cannot be blank");
});

let engine = (id, serial, message) => {
  // If the field is empty
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message; // Display error message

    id.style.border = "2px solid red"; // Make boarder red to indicate an unsuccessful validation

    // icons
    failureIcon[serial].style.opacity = "1"; // show failureIcon
    successIcon[serial].style.opacity = "0"; // hide successIcon
  }
  //If the field is not empty
  if (id.value.trim() != "") {
    errorMsg[serial].innerHTML = ""; //Clear error message

    id.style.border = "2px solid green"; // Make boarder green to indicate a successful validation

    // icons
    failureIcon[serial].style.opacity = "0"; // hide failureIcon
    successIcon[serial].style.opacity = "1"; // show successIcon
  }
};
