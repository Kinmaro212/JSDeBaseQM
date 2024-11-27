// Ce code s'exécute lorsque toute la page HTML est chargée.
document.addEventListener("DOMContentLoaded", function () {
    // Sélection des conteneurs HTML où les citations et les favoris seront affichés
    const quotesContainer = document.getElementById("quotesContainer");
    const favoritesContainer = document.getElementById("favoritesContainer");

    // Si des éléments sont présents dans le local storage, on ajoute les cartes favorites lors du chargement de la page

    // On vérifie que l'objet 'quotes' est bien défini. Si ce n'est pas le cas, une erreur est affichée dans la console.
    if (!quotes) {
        console.error("L'objet 'quotes' n'est pas défini."); // Message d'erreur si le fichier quotes.js est manquant ou incorrect
        return; // On arrête l'exécution du script
    }

    //  Boucle à travers toutes les citations définies dans l'objet 'quotes'.
    // Object.entries() transforme l'objet en un tableau de paires [clé, valeur], ici [auteur, citation].
    for (const [author, quote] of Object.entries(quotes)) {
        // Création d'un nouvel élément HTML pour afficher une citation
        const quoteCard = document.createElement("div");

        
        //Pour chaque paire auteur-citation dans l'objet quotes, on crée un nouvel élément HTML pour afficher une citation.
        //Si une carte favorite est trouvée dans le stockage local, on l'affiche en l'ajoutant aux favoris avec la fonction addToFavorites.
        if (localStorage.getItem(author)) {
            addToFavorites(author, quote);
        }

        //Définition du contenu HTML de la carte de citation
        quoteCard.innerHTML = `
            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                <h3 class="uk-card-title">${author}</h3> <!-- Affiche le nom de l'auteur -->
                <p>${quote}</p> <!-- Affiche le texte de la citation -->
                <button class="uk-button uk-button-primary add-to-favorites">Ajouter aux favoris</button>
            </div>
        `;

        // Ajout d'un gestionnaire d'événement au bouton "Ajouter aux favoris".
        // Lorsqu'on clique sur ce bouton, la fonction addToFavorites est appelée.
        quoteCard.querySelector(".add-to-favorites").addEventListener("click", function () {
            addToFavorites(author, quote); // Passe l'auteur et la citation en paramètre
        });

        // Ajoute la carte de citation au conteneur des citations dans la page
        quotesContainer.appendChild(quoteCard);
    }

    // Fonction qui permet d'ajouter une citation à la section des favoris
    function addToFavorites(author, quote) {
        // Création d'un nouvel élément HTML pour afficher une citation favorite
        var favoriteCard = document.createElement("div");

        // Si l'auteur n'existe pas, on l'ajoute avec sa citation
        localStorage.setItem(author, quote);

        // Définition du contenu HTML de la carte de favori
        favoriteCard.innerHTML = `
            <div class="uk-card uk-card-primary uk-card-hover uk-card-body">
                <h3 class="uk-card-title">${author}</h3> <!-- Affiche le nom de l'auteur -->
                <p>${quote}</p> <!-- Affiche le texte de la citation -->
                <button class="uk-button uk-button-danger remove-from-favorites">Retirer des favoris</button>
            </div>
        `;

        // Ajout d'un gestionnaire d'événement au bouton "Retirer des favoris".
        // Lorsqu'on clique sur ce bouton, l'élément est supprimé de la page.
        favoriteCard.querySelector(".remove-from-favorites").addEventListener("click", function () {
            favoriteCard.remove(); // Supprime la carte HTML de la citation favorite
            localStorage.removeItem(author);
        });

        // Ajoute la carte de favori au conteneur des favoris dans la page
        favoritesContainer.appendChild(favoriteCard);
    }
});
