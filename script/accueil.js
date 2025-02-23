
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


function updateDonateButton() {
  if (selectedAmount && selectedFrequency) {
    donateButton.textContent = `Faire un don de ${selectedAmount}€ - ${(selectedFrequency)}`;
  } else {
    donateButton.textContent = 'Faire un don';
  }
}



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

const histoireImage = document.querySelector('.histoire-image');
const titre = document.getElementById('titre');
const description = document.getElementById('description');
const date = document.getElementById('date');
const histoireBottom = document.getElementById('histoire-bottom');

animaux.forEach(animal => {
  const item = document.createElement("div");
  item.classList.add("histoire-item");
  item.style.backgroundImage = `url(${animal.image})`;
  item.innerHTML = `<p>${animal.titre}</p>`;
  
  item.addEventListener("click", () => {
      histoireImage.style.backgroundImage = `url(${animal.image})`;
      titre.textContent = animal.titre;
      description.textContent = animal.description;
      date.textContent = animal.date;
  });
  
  histoireBottom.appendChild(item);
});


//quiz
    let score = 0;
    let totalQuestions = document.querySelectorAll(".question").length;
    let answeredQuestions = 0;

    const questions = document.querySelectorAll(".question");

    questions.forEach((question) => {
        const buttons = question.querySelectorAll(".buttonquiz");
        const correctAnswer = question.getAttribute("data-correct").toLowerCase();

        buttons.forEach((button) => {
            button.addEventListener("click", function () {
                if (question.classList.contains("answered")) return; 

                question.classList.add("answered");
                answeredQuestions++;

                let resultSymbol = document.createElement("span");
                resultSymbol.style.fontWeight = "bold";
                resultSymbol.style.marginLeft = "10px"; 

                let correctionMessage = document.createElement("p");
                correctionMessage.style.fontSize = "14px";
                correctionMessage.style.marginTop = "5px";

                // Vérifie si la réponse est correcte
                if (button.textContent.trim().toLowerCase().startsWith(correctAnswer)) {
                    button.style.backgroundColor = "#EDFCF5"; 
                    resultSymbol.textContent = " V";
                    resultSymbol.style.color = "green"; 
                  
                    score++;
                } else {
                    button.style.backgroundColor = "#FCE8E8"; 
                    resultSymbol.textContent = " X";
                    resultSymbol.style.color = "red"; 
              
                }

                button.appendChild(resultSymbol);
                question.appendChild(correctionMessage);

                // Désactive les boutons après une réponse
                buttons.forEach((btn) => btn.disabled = true);

                if (answeredQuestions === totalQuestions) {
                    displayScore(score, totalQuestions);
                }
            });
        });
    });

    function displayScore(score, total) {
        const scoreMessage = document.createElement("div");
        scoreMessage.innerHTML = `<h2>Votre score : <span>${score} </span> / <span style="color:black;">${total}</span></h2>`;
        scoreMessage.style.textAlign = "center";
        scoreMessage.style.marginTop = "20px";
        document.querySelector(".section4").appendChild(scoreMessage);
    }

