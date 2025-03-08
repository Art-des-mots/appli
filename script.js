// Gestion de l'événement de clic sur le bouton "Commencer"
document.getElementById('start-button').addEventListener('click', function() {
    alert('Bienvenue! Commencez à explorer les histoires.');
});

// Fonction pour insérer dynamiquement les contenus header et footer
document.addEventListener("DOMContentLoaded", function() {
    // Charger le header
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        });

    // Charger le footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        });

    // Vérifier l'état de connexion de l'utilisateur
    let estConnecte = localStorage.getItem("estConnecte") === "true";
    let menuNonConnecte = document.getElementById("menu-non-connecte");
    let menuConnecte = document.getElementById("menu-connecte");

    // Afficher le bon menu en fonction de l'état de connexion
    if (estConnecte) {
        menuNonConnecte.style.display = "none";
        menuConnecte.style.display = "block";
    } else {
        menuNonConnecte.style.display = "block";
        menuConnecte.style.display = "none";
    }

    // Gestion de la connexion/déconnexion
    // Connexion
    document.querySelector("#menu-non-connecte a[href='connexion.html']").addEventListener("click", function () {
        localStorage.setItem("estConnecte", "true");
        location.reload();
    });

    // Déconnexion
    document.querySelector("#menu-connecte a[href='#']").addEventListener("click", function () {
        localStorage.setItem("estConnecte", "false");
        location.reload();
    });
});
