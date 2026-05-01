function registerUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill all fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Save user (temporary - frontend only)
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");
    window.location.href = "login.html";
}