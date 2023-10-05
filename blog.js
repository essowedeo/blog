// Récupération des éléments du formulaire


const contactForm = document.getElementById('contact-form');
const nomInput = document.getElementById('nom');
const emailInput = document.getElementById('email');
const messageTextarea = document.getElementById('message');
const contactInput = document.getElementById('contact'); 
const errorContainer = document.getElementById('error-container');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Réinitialisez les messages d'erreur
    clearErrors();

    let isValid = true;

    // Validation du nom
    const nomValue = nomInput.value.trim();
    if (nomValue === '' || /^[0-9!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/\\-]/.test(nomValue) || nomValue.length < 3) {
        displayError('Le nom est invalide. Il doit comporter au moins 3 caractères et ne pas commencer par un chiffre ou un signe.');
        isValid = false;
    }

    // Validation de l'e-mail (vérifiez s'il est au bon format)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        displayError('L\'adresse e-mail n\'est pas valide. Elle doit être au format exemple@domaine.com');
        isValid = false;
    }

    // Validation du message (vérifiez s'il est vide)
    if (messageTextarea.value.trim() === '') {
        displayError('Le message est requis');
        isValid = false;
    }

    // Validation du contact avec le regex
    const contactValue = contactInput.value.trim();
    const contactPattern = /^((9[0-3 6-9])|(2[2-7])|(7[01]))[0-9]{6}$/;
    if (!contactPattern.test(contactValue)) {
        displayError('Le numéro de contact n\'est pas valide. Il doit correspondre au format d\'un numero togolais .');
        isValid = false;
    }

    if (isValid) {
        // Si toutes les validations passent, vous pouvez envoyer le formulaire au serveur
        // Ici, vous pouvez ajouter le code pour envoyer les données au serveur
        window.location.href = 'confim_contact.html';
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
