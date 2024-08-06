

const form = document.getElementById('registration-form');
const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');

let firstnameError = document.getElementById('firstname-error');
let lastnameError = document.getElementById('lastname-error');
let emailError = document.getElementById('email-error');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  validateForm();
});

cancelBtn.addEventListener('click', () => {
  form.reset();
});

function validateForm() {
  let isValid = true;
  
  if (firstnameInput.value.trim() === '') {
    firstnameError.textContent = 'Please enter your first name';
    isValid = false;
  } else {
    firstnameError.textContent = '';
  }
  
  if (lastnameInput.value.trim() === '') {
    lastnameError.textContent = 'Please enter your last name';
    isValid = false;
  } else {
    lastnameError.textContent = '';
  }
  
  if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
  } else {
    emailError.textContent = '';
  }


  
  if (isValid) {
     alert(`Registration successful! \nFirst Name: ${firstnameInput.value} \nLast Name: ${lastnameInput.value} \nEmail: ${emailInput.value}`);
    
    form.reset();
  }

  


 
}



 function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  //+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

