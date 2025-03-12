document.getElementById("signupForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    if (data.success) {
        alert("Inscription réussie !");
        window.location.href = "login.html"; // Redirige vers la connexion
    } else {
        alert("Erreur : " + data.message);
    }
});
