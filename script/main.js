document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    validationForm();
});

function validationForm() {
    // Récupérer les valeurs des champs
    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let sujet = document.getElementById('sujet').value;
    let message = document.getElementById('message').value;

    // Récupérer les éléments d'erreur
    let error_nom = document.getElementById('error-nom');
    let error_email = document.getElementById('error-email');
    let error_sujet = document.getElementById('error-sujet');
    let error_message = document.getElementById('error-message');

    let isValid = true;

    // Réinitialisation des messages d'erreur
    error_nom.innerHTML = "";
    error_email.innerHTML = "";
    error_sujet.innerHTML = "";
    error_message.innerHTML = "";

    // Validation du champ Nom
    if (nom === "") {
        error_nom.innerHTML = "Le nom est obligatoire !";
        isValid = false;
    }

    // Validation du champ Email
    if (email === "") {
        error_email.innerHTML = "L'adresse email est obligatoire !";
        isValid = false;
    } else if (!email.includes("@")) {
        error_email.innerHTML = "L'email doit contenir un '@' !";
        isValid = false;
    }

    // Validation du champ Sujet
    if (sujet === "") {
        error_sujet.innerHTML = "Veuillez sélectionner un sujet.";
        isValid = false;
    }

    // Validation du champ Message
    if (message === "") {
        error_message.innerHTML = "Veuillez écrire un message.";
        isValid = false;
    }

    // Si tout est valide, envoyer le formulaire et rediriger
    if (isValid) {
        alert("Le formulaire a été envoyé avec succès !");
        document.getElementById('myForm').reset();
        window.location.href = "Accueil.html"; 
    }
}
