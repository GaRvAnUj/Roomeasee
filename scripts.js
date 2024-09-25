const emailInput = document.getElementById('emailInput');
const otpInput = document.getElementById('otpInput');
const sendOtpBtn = document.getElementById('sendOtpBtn');
const loginBtn = document.getElementById('loginBtn');
const loginPage = document.getElementById('login-page');
const mainMenu = document.getElementById('main-menu');

let generatedOtp;

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

sendOtpBtn.addEventListener('click', () => {
  const email = emailInput.value;
  
  if (validateEmail(email)) {
    generatedOtp = Math.floor(1000 + Math.random() * 9000);
    alert(`OTP sent to ${email}: ${generatedOtp}`);
    otpInput.style.display = 'block';
    loginBtn.style.display = 'block';
    sendOtpBtn.disabled = true;
  } else {
    alert('Please enter a valid email');
  }
});

loginBtn.addEventListener('click', () => {
  const enteredOtp = otpInput.value;

  if (enteredOtp == generatedOtp) {
    alert('Login successful!');
    loginPage.style.display = 'none';
    mainMenu.style.display = 'block';
  } else {
    alert('Invalid OTP. Please try again.');
  }
});
