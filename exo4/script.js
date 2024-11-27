// Sélection de tous les éléments HTML avec la classe 'carre' (les carrés cliquables)
const carres = document.querySelectorAll('.carre'); 

// Sélection de l'élément HTML avec l'ID 'network-name'
// Cet élément affichera le nom du réseau social sélectionné
const networkName = document.getElementById('network-name');

// Ajout d'un événement clic sur chaque carré
// La méthode forEach parcourt chaque élément de la liste 'carres'
carres.forEach(carre => {
    carre.addEventListener('click', () => {
        // Vérifie si le carré sur lequel on clique est déjà actif (possède la classe 'active')
        if (carre.classList.contains('active')) {
            // Si le carré est actif, on réinitialise l'état global
            document.body.style.backgroundColor = 'gray'; // Revenir à une couleur de fond grise par défaut
            networkName.textContent = 'Sélectionnez un réseau social'; // Réinitialiser le texte à un message générique
            carre.classList.remove('active'); // Retirer la classe 'active' du carré
        } else {
            // Désactiver tous les autres carrés (retirer la classe 'active' des autres éléments)
            carres.forEach(c => c.classList.remove('active'));

            // Activer le carré cliqué en lui ajoutant la classe 'active'
            carre.classList.add('active');

            // Modifier la couleur de fond de la page pour correspondre à la couleur du carré
            document.body.style.backgroundColor = carre.style.backgroundColor;

            // Afficher le nom du réseau social correspondant, grâce à l'attribut 'data-network' du carré
            networkName.textContent = carre.getAttribute('data-network');
        }
    });
});
