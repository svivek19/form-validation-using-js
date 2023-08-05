const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const button = document.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required')
    } else {
        setSuccess(username);
    }
    if (emailValue === '') {
        setError(email, 'Email is required')
    } else {
        setSuccess(email);
    }
    if (passwordValue === '') {
        setError(password, 'Password is required')
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 charecter.')
    } else {
        setSuccess(password);
    }
    if (password2Value === '') {
        setError(password2, 'Please confirm your password')
    } else if (password2Value !== passwordValue) {
        setError(password, "Password doesn't match")
    } else {
        setSuccess(password);
    }

    // Animation - Submit Button
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
