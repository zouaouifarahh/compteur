document.addEventListener("DOMContentLoaded", function () {
    // Récupérer les éléments du DOM
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
    const resetButton = document.getElementById("reset");
    const countElement = document.getElementById("count");

    let count = 0;

    // Fonction pour mettre à jour le compteur et l'affichage
    function updateCount() {
        countElement.textContent = count;
    }

    // Gestionnaire d'événements pour le bouton d'incrémentation
    incrementButton.addEventListener("click", function () {
        if (count < 10) {
            count++;
            updateCount();
        }
    });

    // Gestionnaire d'événements pour le bouton de décrémentation
    decrementButton.addEventListener("click", function () {
        if (count > 0) {
            count--;
            updateCount();
        }
    });

    // Gestionnaire d'événements pour le bouton de réinitialisation
    resetButton.addEventListener("click", function () {
        // Réinitialiser le compteur à 0
        count = 0;
        updateCount();
    });
});
