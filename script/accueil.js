
// Sélectionner les éléments des options de donation et des boutons de fréquence
const donationOptions = document.querySelectorAll('.donation-option');
const frequencyButtons = document.querySelectorAll('.donation-frequency-btn');
const donateButton = document.querySelector('.donate-submit-btn');

// Variables pour stocker les valeurs sélectionnées
let selectedAmount = null;
let selectedFrequency = null;

// Ajouter l'événement de sélection sur les options de donation
donationOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Retirer la classe 'selected' des autres options
    donationOptions.forEach(opt => opt.classList.remove('selected'));
    // Ajouter la classe 'selected' à l'option cliquée
    option.classList.add('selected');
    // Sauvegarder le montant sélectionné
    selectedAmount = option.getAttribute('data-amount');
    updateDonateButton();
  });
});

// Ajouter l'événement de sélection sur les boutons de fréquence
frequencyButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Retirer la classe 'selected' des autres boutons
    frequencyButtons.forEach(btn => btn.classList.remove('selected'));
    // Ajouter la classe 'selected' au bouton cliqué
    button.classList.add('selected');
    // Sauvegarder la fréquence sélectionnée
    selectedFrequency = button.getAttribute('data-frequency');
    updateDonateButton();
  });
});

// Fonction pour mettre à jour le texte du bouton "Faire un don"
function updateDonateButton() {
  if (selectedAmount && selectedFrequency) {
    donateButton.textContent = `Faire un don de ${selectedAmount}€ - ${capitalizeFirstLetter(selectedFrequency)}`;
  } else {
    donateButton.textContent = 'Faire un don';
  }
}




// Capitalisation de la première lettre de la fréquence
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Ajouter l'événement de validation du don
donateButton.addEventListener('click', () => {
  if (selectedAmount && selectedFrequency) {
    alert(`Merci pour votre don de ${selectedAmount}€ en mode ${selectedFrequency}!`);
  } else {
    alert('Veuillez sélectionner un montant et une fréquence avant de faire un don.');
  }
});


// Sélectionner les éléments nécessaires
const histoireItems = document.querySelectorAll('.histoire-item');
const histoireImage = document.querySelector('.histoire-image');
const titre = document.getElementById('titre');
const description = document.getElementById('description');
const date = document.getElementById('date');

// Ajouter l'événement de clic sur chaque élément de la galerie
histoireItems.forEach(item => {
  item.addEventListener('click', () => {
    // Récupérer les données de l'élément cliqué
    const imageUrl = item.getAttribute('data-image');
    const titreText = item.getAttribute('data-titre');
    const descriptionText = item.getAttribute('data-description');
    const dateText = item.getAttribute('data-date');

    // Changer l'image de fond
    histoireImage.style.backgroundImage = `url(${imageUrl})`;
    
    // Mettre à jour le texte
    titre.textContent = titreText;
    description.textContent = descriptionText;
    date.textContent = dateText;
  });
});

