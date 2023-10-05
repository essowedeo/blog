const loginForm = document.getElementById('login-form');
const nomUtilisateurInput = document.getElementById('nom_utilisateur');
const emailInput = document.getElementById('email');
const contactInput = document.getElementById('contact');
const passwordInput = document.getElementById('password');
const errorContainer = document.getElementById('error-container');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    clearErrors();

    let isValid = true;

    const nomUtilisateurValue = nomUtilisateurInput.value.trim();
    if (nomUtilisateurValue === '' || /^[0-9!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/\\-]/.test(nomUtilisateurValue) || nomUtilisateurValue.length < 3) {
        displayError('Le nom d\'utilisateur est invalide. Il doit comporter au moins 3 caractères et ne pas commencer par un chiffre ou un signe.');
        isValid = false;
    }

    // Validation de l'e-mail (vérifiez s'il est au bon format)
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailValue)) {
        displayError('L\'adresse e-mail n\'est pas valide. Elle doit être au format exemple@domaine.com');
        isValid = false;
    }

    // Validation du contact avec le regex
    const contactValue = contactInput.value.trim();
    const contactPattern = /^((9[0-6])|(2[2-7])|(7[01]))[0-9]{6}$/;
    if (!contactPattern.test(contactValue)) {
        displayError('Le numéro de contact n\'est pas valide. Il doit correspondre au format du numero utiliser au togo.');
        isValid = false;
    }

    // Validation du mot de passe (ajoutez ici la validation du mot de passe si nécessaire)
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === '' || passwordValue.length < 6) {
        displayError('Le mot de passe est invalide. Il doit comporter au moins 6 caractères.');
        isValid = false;
    }

    if (isValid) {
        window.location.href = 'blog.html';
    }
});

function displayError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorContainer.appendChild(errorDiv);
}

function clearErrors() {
    while (errorContainer.firstChild) {
        errorContainer.removeChild(errorContainer.firstChild);
    }
}
