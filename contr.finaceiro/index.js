function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById('recover-password-buutton').disabled = !emailValid;

    const password = isPasswordValid();
    document.getElementById('login-buttonn').desabled = !emailValid || !passwordValid;

    function isEmailValid() {
        const email = document.getElementById("email").value;
        if (!email) {
            return false;
        }
        return validateEmail(email);
    }

    function toggleEmailErrors() {
        
    }

    function isPasswordValid() {
        const password = document.getElementById('password').value;
        if (!password) {
            return false;
        }
        return true;
    }

}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

