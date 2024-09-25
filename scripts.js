const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');
const otpSentNotification = document.getElementById('otpSentNotification');
const otpInput = document.getElementById('otpInput');
const sendOtpBtn = document.getElementById('sendOtpBtn');
const resendOtpBtn = document.getElementById('resendOtpBtn');
const loginBtn = document.getElementById('loginBtn');
const otpError = document.createElement('span');
otpError.className = 'error-message'; 
otpError.style.display = 'none';
loginBtn.parentNode.insertBefore(otpError, loginBtn.nextSibling); 

const loginPage = document.getElementById('login-page');
const mainMenu = document.getElementById('main-menu');

let generatedOtp;

const vitEmailRegex = /^[a-zA-Z]+\.[0-9]{4}@vitstudent\.ac\.in$/;

function showToast(message) {
    otpSentNotification.textContent = message;
    otpSentNotification.style.display = 'block';
    setTimeout(() => {
        otpSentNotification.style.display = 'none';
    }, 5000);
}

function sendOtp() {
    const email = emailInput.value;

    if (vitEmailRegex.test(email)) {
        emailError.style.display = 'none';
        generatedOtp = Math.floor(1000 + Math.random() * 9000);
        console.log(`OTP sent to ${email}: ${generatedOtp}`); 
        alert(`Your OTP is: ${generatedOtp}`); 
        showToast('OTP sent successfully');
        otpInput.style.display = 'block';
        loginBtn.style.display = 'block';
        resendOtpBtn.style.display = 'block';
    } else {
        emailError.style.display = 'block';
    }
}

function verifyOtp() {
    const enteredOtp = otpInput.value;
    if (enteredOtp === generatedOtp.toString()) {
        alert('Login successful!');
        
        loginPage.style.display = 'none'; 
        mainMenu.style.display = 'block'; 

        emailInput.value = '';
        otpInput.value = '';
        emailError.style.display = 'none';
        otpError.style.display = 'none';
    } else {
        otpError.textContent = "OTP doesn't match. Please enter the OTP again.";
        otpError.style.display = 'block';
    }
}

sendOtpBtn.addEventListener('click', sendOtp);
resendOtpBtn.addEventListener('click', sendOtp);
loginBtn.addEventListener('click', verifyOtp);
