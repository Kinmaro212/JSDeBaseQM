

const carre = document.createElement("div"); // Crée une boîte
carre.classList.add("carre"); // Ajoute une classe pour le style


const board = document.body; // ou sélectionnez un autre élément conteneur
board.appendChild(carre); // Ajoute la boîte au plateau

alert(`
    Classe CSS : ${carre.className}
    Couleur du texte : rgb(255, 255, 255)
    Couleur de fond : rgb(136,174,136)
    Hauteur : 200px
    Largeur : 200px
    Police : Time New Roman
    Taille du texte : 40px
`);