const isLoggedIn = false; //Assume this is local storage

function handleAccount() {
    const contentDiv = document.getElementById('content');

    // Dummy check for login from local storage
    if (isLoggedIn) {
        contentDiv.innerHTML = `
        <div class="container mt-5">
            <h1><strong>Welcome to Your Account</strong></h1>
            <p>Account detail will be added later in fullstack version</p>
            <button class="btn btn-danger mb-4 Logout">Logout</button>
        </div>
        `;

    } else {
        contentDiv.innerHTML = `
            <div class="container mt-5" style="max-width: 400px;">
                <h1 class="mt-5 mb-4 text-center"><strong>Login</strong></h1>
                <form id="loginForm">
                    <div class="mb-3">
                        <label for="loginEmail" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="loginEmail" placeholder="Email">
                    </div>
                    <div class="mb-3">
                        <label for="loginPassword" class="form-label">Password</label>
                        <div class="input-group">
                            <input type="password" class="form-control" id="loginPassword" placeholder="Password">
                            <button class="btn btn-secondary togglePassword" type="button">
                                <i class="bi bi-eye d-none" id="showIcon"></i>
                                <i class="bi bi-eye-slash" id="hideIcon"></i>
                            </button>
                        </div>
                    </div>
                    <div class="mb-3 d-flex justify-content-between">
                        <a href="#" class="text-decoration-none" id="AccountPage">Forgot password?</a>
                        <a href="./Register.html" class="text-decoration-none" id="AccountPage">Register</a>
                    </div>
                    <button type="submit" class="btn btn-warning w-100 mb-4 Login">Login</button>
                </form>
            </div>
        `;

    }

}

// Place holder function
function login() {
    alert('Login function will be added later in fullstack version');
}

function logout() {
    alert('Logout function will be added later in fullstack version');
}

function Register() {
    alert('Register function will be added later in fullstack version');
}

export { handleAccount, login, logout, Register, isLoggedIn };