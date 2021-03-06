// btnEnvoyer = document.querySelector(".form--submit");

// btnEnvoyer.addEventListener("click", () => {
//   console.log("ta envoyer le form");
//   var radios = document.getElementsByName("example");
//   for (var i = 0, length = radios.length; i < length; i++) {
//     if (radios[i].checked) {
//       // do whatever you want with the checked radio
//       console.log(radios[i].getAttribute("value"));

//       // only one radio can be logically checked, don't check the rest
//       break;
//     }
//   }
// });

// function getAction() {

//     document.myForm.action = "#";
//     console.log("reussi");

// }


// Step Form

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

// End Step Form


// Hide submit button to prevent multiple sending.

var btnEnvoyer = document.querySelector(".form--submit");
var confirmation_envoi = document.querySelector(".confirmation-envoi");
btnEnvoyer.addEventListener("click", () => {
  btnEnvoyer.classList.add("form--submitHide");
  confirmation_envoi.classList.remove("hide");


  setTimeout(() => {
    btnEnvoyer.classList.remove("form--submitHide");
    confirmation_envoi.classList.add("hide");
  },5000)
})