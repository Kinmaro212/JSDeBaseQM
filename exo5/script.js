document.addEventListener("DOMContentLoaded", function () {
    const quotesContainer = document.getElementById("quotesContainer");
    const favoritesContainer = document.getElementById("favoritesContainer");

    // Vérifiez si l'objet quotes est bien défini
    if (!quotes) {
        console.error("L'objet 'quotes' n'est pas défini.");
        return;
    }

    // Parcourir et afficher les citations
    for (const [author, quote] of Object.entries(quotes)) {
        const quoteCard = document.createElement("div");
        quoteCard.innerHTML = `
            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                <h3 class="uk-card-title">${author}</h3>
                <p>${quote}</p>
                <button class="uk-button uk-button-primary add-to-favorites">Ajouter aux favoris</button>
            </div>
        `;

        // Ajouter une citation aux favoris
        quoteCard.querySelector(".add-to-favorites").addEventListener("click", function () {
            addToFavorites(author, quote);
        });

        quotesContainer.appendChild(quoteCard);
    }

    // Fonction pour ajouter une citation aux favoris
    function addToFavorites(author, quote) {
        const favoriteCard = document.createElement("div");
        favoriteCard.innerHTML = `
            <div class="uk-card uk-card-primary uk-card-hover uk-card-body">
                <h3 class="uk-card-title">${author}</h3>
                <p>${quote}</p>
                <button class="uk-button uk-button-danger remove-from-favorites">Retirer des favoris</button>
            </div>
        `;

        // Bouton pour retirer des favoris
        favoriteCard.querySelector(".remove-from-favorites").addEventListener("click", function () {
            favoriteCard.remove();
        });

        favoritesContainer.appendChild(favoriteCard);
    }
});
