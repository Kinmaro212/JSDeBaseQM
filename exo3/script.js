// Récupère tous les carrés
const carres = document.querySelectorAll('.carre');

// Ajoute un événement pour chaque carré
carres.forEach(carre => {
    carre.addEventListener('click', () => {
        // Bascule la classe 'active' pour l'animation
        carre.classList.toggle('active');// toggle rend la classe active donc ici class list et elle deviennt active et signfie que le css .active s'applique sur la class  
    });
});
// Si la classe active est absente de la liste des classes de l'élément, elle est ajoutée.
// Si elle est déjà présente, elle est supprimée.
// C'est comme un interrupteur qui allume ou éteint une fonctionnalité visuelle définie par la classe active.

//A l'aide de cette methode DOMTokenList: toggle() method