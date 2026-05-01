function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill all fields");
        return;
    }

    // Dummy login (frontend only)
    if (email === "admin@gmail.com" && password === "1234") {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid Email or Password");
    }
}