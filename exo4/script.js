// Sélectionner tous les carrés
const carres = document.querySelectorAll('.carre');
const networkName = document.getElementById('network-name');

// Ajouter un événement de clic sur chaque carré
carres.forEach(carre => {
    carre.addEventListener('click', () => {
        // Si le carré est déjà actif, réinitialiser
        if (carre.classList.contains('active')) {
            document.body.style.backgroundColor = 'gray'; // Revenir à la couleur de fond grise
            networkName.textContent = 'Sélectionnez un réseau social'; // Réinitialiser le nom
            carre.classList.remove('active'); // Retirer le style actif
        } else {
            // Désactiver tous les autres carrés
            carres.forEach(c => c.classList.remove('active'));

            // Activer le carré sur lequel on clique
            carre.classList.add('active');
            document.body.style.backgroundColor = carre.style.backgroundColor; // Couleur du carré
            networkName.textContent = carre.getAttribute('data-network'); // Afficher le nom du réseau social
        }
    });
});
