// Sélectionne le premier élément avec la classe 'carre'
const carre = document.querySelector(".carre");

// Ajoute un écouteur d'événements qui s'active au clic sur l'élément 'carre' 
//et récupère toute les informations du fichier css q'uon a établit dans notre fichier JS
carre.addEventListener("click", () => {
    // On Récupère les styles CSS appliqués à l'élément 'carre'
    const styles = window.getComputedStyle(carre);

    // Récupère la classe CSS de l'élément
    const classe = carre.className;
    
    // Récupère la couleur du texte de l'élément
    const couleurTexte = styles.color;
    
    // Récupère la couleur de fond de l'élément
    const couleurFond = styles.backgroundColor;
    
    // Récupère la hauteur de l'élément
    const hauteur = styles.height;
    
    // Récupère la largeur de l'élément
    const largeur = styles.width;
    
    // Récupère la police utilisée pour l'élément
    const police = styles.fontFamily;
    
    // Récupère la taille du texte de l'élément
    const tailleTexte = styles.fontSize;

    // Affiche une alerte contenant toutes les informations récupérées
    alert(`
        Classe CSS : ${classe}
        Couleur du texte : ${couleurTexte}
        Couleur de fond : ${couleurFond}
        Hauteur : ${hauteur}
        Largeur : ${largeur}
        Police : ${police}
        Taille du texte : ${tailleTexte}
    `);
});
