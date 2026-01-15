// Fake OTP (for frontend testing)
const SERVER_OTP = "123456";

const inputs = document.querySelectorAll(".otp input");
const verifyBtn = document.getElementById("verifyBtn");
const otpError = document.getElementById("otpError");
const userEmail = document.getElementById("user-email");

// Show stored email
userEmail.textContent = localStorage.getItem("userEmail") || "your email";

// Move focus automatically
inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (!/^[0-9]$/.test(input.value)) {
            input.value = "";
            return;
        }

        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

// Verify OTP
verifyBtn.addEventListener("click", () => {
    let enteredOtp = "";

    inputs.forEach(input => enteredOtp += input.value);

    otpError.style.color = "red";

    if (enteredOtp.length !== 6) {
        otpError.textContent = "Enter the 6-digit verification code";
        return;
    }

    if (enteredOtp !== SERVER_OTP) {
        otpError.textContent = "Incorrect verification code";
        return;
    }

    otpError.style.color = "green";
    otpError.textContent = "Email verified successfully!";

    setTimeout(() => {
        window.location.href = "success.html";
    }, 1500);
});