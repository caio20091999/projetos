function validateFields() {
    toggleButtonsDisable();
    toggleEmailErrors();    
}
    function isEmailValid() {
        const email = document.getElementById("email").value;
        if (!email) {
            return false;
        }
        return validateEmail(email);
    }

    function toggleEmailErrors() {
        const emailValid = isEmailValid();
        document.getElementById('email').value;
        if (!email) {
            document.getElementById('email-required-error').style.display ="block";
        }
    }

    function toggleButtonsDisable() {
        const emailValid = isEmailValid();
    document.getElementById('recover-password-buutton').disabled= !isEmailValid;

    const password = isPasswordValid();
    document.getElementById('login-buttonn').disabled = !isEmailValid || !isPasswordValid;
    }

    function isPasswordValid() {
        const password = Document.getElementById('password').value;
        if (!password) {
            return false;
        }
        return true;
    }



function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

