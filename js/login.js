document.getElementById('login-submit').addEventListener('click', function () {
    //Get user Eamil        
    const eamilField = document.getElementById('user-email');
    const userEmail = eamilField.value;
    console.log(userEmail);

    //Get user Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);
    //Authentication
    if (userEmail == 'sontan@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
})