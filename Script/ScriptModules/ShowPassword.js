function TogglePasswordIcon(passwordInput, showIcon, hideIcon) {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

    showIcon.classList.toggle('d-none', !isPassword);
    hideIcon.classList.toggle('d-none', isPassword);
}

export { TogglePasswordIcon };