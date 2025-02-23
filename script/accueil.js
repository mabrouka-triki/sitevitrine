
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
    donateButton.textContent = `Faire un don de ${selectedAmount}€ - ${(selectedFrequency)}`;
  } else {
    donateButton.textContent = 'Faire un don';
  }
}



// Liste des animaux sauvés
const animaux = [
  {
      image: "../asset/imagechien2.jpeg",
      titre: "Louna",
      description: "Trouvée dans la rue avec une patte cassée, Louna a été soignée et a retrouvé sa joie de vivre.",
      date: "Janvier 2024"
  },
  {
      image: "../asset/imagechien3.jpg",
      titre: "Oscar",
      description: "Oscar a été sauvé d'une situation de négligence, et aujourd'hui il est heureux dans une nouvelle famille.",
      date: "Février 2024"
  },
  {
      image: "../asset/ImageMax.jpeg",
      titre: "Max",
      description: "Max a été trouvé dans un état pitoyable, mais grâce aux soins qu'il a reçus, il a retrouvé sa forme.",
      date: "Mars 2024"
  }
];

// Sélectionner les éléments nécessaires
const histoireImage = document.querySelector('.histoire-image');
const titre = document.getElementById('titre');
const description = document.getElementById('description');
const date = document.getElementById('date');
const histoireBottom = document.getElementById('histoire-bottom');

// Générer dynamiquement les cartes des animaux
animaux.forEach(animal => {
  const item = document.createElement("div");
  item.classList.add("histoire-item");
  item.style.backgroundImage = `url(${animal.image})`;
  item.innerHTML = `<p>${animal.titre}</p>`;
  
  // Met à jour l'image principale et les informations lors du clic
  item.addEventListener("click", () => {
      histoireImage.style.backgroundImage = `url(${animal.image})`;
      titre.textContent = animal.titre;
      description.textContent = animal.description;
      date.textContent = animal.date;
  });
  
  // Ajouter la vignette à la galerie
  histoireBottom.appendChild(item);
});


