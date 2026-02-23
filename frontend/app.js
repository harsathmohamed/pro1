async function loginUser() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            document.getElementById("error").innerText = "Invalid credentials";
            return;
        }

        const data = await response.json();

        // Save user info
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("role", data.role);

        // Redirect to home
        window.location.href = "index.html";

    } catch (error) {
        document.getElementById("error").innerText = "Server error";
    }
}