
document.getElementById('btnAcheter').addEventListener('click', function() {
    var allValid = true;

    var nom = document.getElementById('nom').value; // Récupère la valeur du champ nom

    // Utilisation d'une expression régulière pour vérifier si le champ nom contient uniquement des lettres
    if (!/^[a-zA-Z]+$/.test(nom)) {
        alert("Le nom ne doit contenir que des lettres.");
        document.getElementById('nom').focus(); // Déplace le curseur dans le champ nom
        return; // Arrête l'exécution de la fonction ici
    }
    
    // Validation du numéro de téléphone
    var telephone = document.getElementById('telephone').value;
    if (!telephone.match(/^\+1\(\d{3}\) \d{3}-\d{4}$/)) {
        allValid = false;
        alert('Le numéro de téléphone doit être au format +1(XXX) XXX-XXXX.');
        document.getElementById('telephone').focus();
        return; // Arrête l'exécution de la fonction ici
    }

    // Validation du courriel
    var email = document.getElementById('email').value;
    if (!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)) {
        allValid = false;
        alert("Adresse courriel invalide !");
        document.getElementById('email').focus();
        return; // Arrête l'exécution de la fonction ici
    }

    // Validation des boutons radios pour les sessions
    var sessionSelected = document.querySelector('input[name="session"]:checked');
    if (!sessionSelected) {
        allValid = false;
        alert("Veuillez choisir une session.");
        return; // Arrête l'exécution de la fonction ici
    }

    // Si tout est valide, faites ce qui doit être fait ensuite, par exemple soumettre le formulaire.
    if (allValid) {
        alert('Toutes les informations sont valides. Le formulaire est prêt à être soumis.');
        // document.getElementById('inscriptionForm').submit(); // Décommentez pour soumettre le formulaire
    }
});
