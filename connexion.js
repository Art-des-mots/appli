document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    if (email === "" || password === "") {
        errorMessage.textContent = "Veuillez remplir tous les champs.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        alert("Connexion réussie !");
        // Ici, vous pouvez rediriger l'utilisateur vers une autre page
        window.location.href = "index.html";
    }
});
