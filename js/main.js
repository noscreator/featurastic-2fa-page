// /public/js/twofa.js
function restrictInputToDigits(event) {
  const input = event.target;
  input.value = input.value.replace(/\D/g, ''); // Allow only digits

  // Move to the next input field if the current input has a value
  if (input.value && input.nextElementSibling) {
    input.nextElementSibling.focus();
  }
}

// /public/js/twofa.js
function submitVerification(event) {
  event.preventDefault();

  // Collect the entered verification code
  const verificationCode =
    document.getElementById('verificationCode1').value +
    document.getElementById('verificationCode2').value +
    document.getElementById('verificationCode3').value +
    document.getElementById('verificationCode4').value +
    document.getElementById('verificationCode5').value +
    document.getElementById('verificationCode6').value;

  // Perform verification logic (e.g., compare with stored code, send to server for validation)
  

  // Add your verification logic here

  // Clear the input fields after verification attempt
  document.getElementById('verificationCode1').value = '';
  document.getElementById('verificationCode2').value = '';
  document.getElementById('verificationCode3').value = '';
  document.getElementById('verificationCode4').value = '';
  document.getElementById('verificationCode5').value = '';
  document.getElementById('verificationCode6').value = '';
}

function resendCode() {
  // Add logic to resend the verification code (e.g., send a new code via SMS)
  console.log('Resending verification code...');
}