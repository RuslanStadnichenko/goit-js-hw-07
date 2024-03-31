const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', event => {
event.preventDefault();

const formData = {
        [loginForm.elements.email.name]: loginForm.elements.email.value,
        [loginForm.elements.password.name]: loginForm.elements.password.value,
};
    console.log(formData);
    if (!loginForm.elements.email.value || !loginForm.elements.password.value) {
        alert('All form fields must be filled in');
        return;
    };

loginForm.reset();
});
